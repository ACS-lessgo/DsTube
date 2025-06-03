# DsTube
- Yt clone 


-----

import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import ollama  # uses the local API at http://localhost:11434
import time
from datetime import datetime

app = Flask(__name__)
CORS(app)

client = ollama.Client(host='http://localhost:11434')  # Local Ollama client

TASKS = ["code review", "code optimization", "documentation","generate test cases","code generation"]

MODELS = {
    "intent": "mistral",
    "code": "deepseek-coder:6.7b",
    "supervisor": "gemma"
}


# --- Agent 1: Improved Intent Detector ---
def detect_intent(prompt):
    task_descriptions = "\n- " + "\n- ".join(TASKS)

    system_prompt = f"""You are a precise and strict intent detector.

Your job is to determine if the user's request corresponds exactly to one of the following tasks:
{task_descriptions}

Return the matching task name only. If the user's intent is unrelated or ambiguous, return: NO_MATCH.

Here are some examples:
---
User: Please help optimize this Python script.
Intent: code optimization

User: Can you explain what this class does?
Intent: documentation

User: Is this code following best practices?
Intent: code review

User: Generate code for some functionality?
Intent: code generation

User: How do I build a web app?
Intent: NO_MATCH

User: What's the difference between list and set in Python?
Intent: NO_MATCH

Now respond only with the task name or NO_MATCH."""

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": prompt}
    ]
    response = client.chat(model=MODELS["intent"], messages=messages)
    return response['message']['content'].strip().lower()


# --- Agent 2: Task-Specific Expert ---
def agent_2_response(task, prompt, code=None):
    system_prompt = f"""You are a professional software engineer highly skilled in {task}.

Your task is to:
1. Understand the user's goal based on the prompt and code.
2. Perform the {task} task rigorously and clearly.
3. Respond in structured Markdown for display in a chat interface.

Format:
**Overview**
Brief explanation of the task you performed.

**Findings / Suggestions / Output**
- Use bullet points, numbered lists, or code blocks.
- Use a clear and professional tone.
- Highlight issues or improvements.

Only include content relevant to {task}.
"""

    user_prompt = prompt + (f"\n\nCode:\n{code}" if code else "")
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt}
    ]
    response = client.chat(model=MODELS["code"], messages=messages)
    return response['message']['content'].strip()


# --- Agent 3: Markdown Formatter ---
def supervisor_agent(text):
    messages = [
        {
            "role": "system",
            "content": (
                "You are a senior software documentation and formatting assistant.\n"
                "Your job is to take raw AI output and transform it into clear, clean, structured Markdown.\n\n"
                "The input will be related to one of the following tasks:\n"
                "- Code Generation"
                "- Code Snippet Generation"
                "- Code Review\n"
                "- Code Optimization\n"
                "- Documentation\n"
                "- Generate Test Cases\n\n"
                "Your response **must**:\n"
                "- Start with a bold heading like: `**Task: {Replace with the actual task name}**`\n"
                "- Break the response into clean sections using `##` headers\n"
                "- Use bullet points, numbered lists, and code blocks where appropriate\n"
                "- Ensure Python code is wrapped in triple backticks with `python`\n"
                "- Never add irrelevant explanation or fluff\n"
                "- Keep the tone technical and concise\n\n"
                "Format the result for rendering inside a VS Code extension or modern web chat UI.\n"
                "Focus on professionalism, clarity, and developer readability."
            )
        },
        {
            "role": "user",
            "content": text
        }
    ]
    response = client.chat(model=MODELS["supervisor"], messages=messages)
    return response['message']['content'].strip()



@app.route("/orchestrate", methods=["POST"])
def orchestrate():
    start_time = time.time()
    now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    print(f"\n🚀 [{now}] New request received")

    prompt = request.form.get("prompt")
    uploaded_file = request.files.get("file")

    if not prompt:
        print("❌ Missing prompt.")
        return jsonify({"error": "Prompt is required"}), 400

    print("🧠 Step 1: Detecting intent...")
    curr_time_1 = time.time()
    intent = detect_intent(prompt)
    intent_time = round(time.time() - curr_time_1, 2)
    print(f"👉 Intent Detected: {intent} in {intent_time} seconds")

    if intent == "no_match":
        print("🔄 No matching intent. Falling back to general response (llama3)...")
        fallback = client.chat(model="llama3", messages=[{"role": "user", "content": prompt}])
        elapsed = round(time.time() - start_time, 2)
        print(f"✅ Done in {elapsed}s\n")
        return jsonify({
            "status": "fallback",
            "intent": "no_match",
            "response": fallback['message']['content'].strip(),
            "time_taken_seconds": elapsed
        })

    print("🛠️ Step 2: Handling task with agent...")
    code = uploaded_file.read().decode('utf-8') if uploaded_file else None
    curr_time_2 = time.time()
    raw_response = agent_2_response(intent, prompt, code)
    response_time = round(time.time() - curr_time_2, 2)
    print(f"✅ Agent response complete in {response_time} seconds")

    print("🎨 Step 3: Formatting response with supervisor...")
    curr_time_3 = time.time()
    final_output = supervisor_agent(raw_response)
    supervisor_time = round(time.time() - curr_time_3, 2)
    print(f"✅ Final output ready in {supervisor_time} seconds")

    elapsed = round(time.time() - start_time, 2)
    print(f"✅ Request completed in {elapsed} seconds.\n")

    return jsonify({
        "status": "success",
        "intent": intent,
        "response": raw_response,
        "supervised_markdown": final_output,
        "time_taken_seconds": elapsed
    })

if __name__ == "__main__":
    app.run(port=5050)
