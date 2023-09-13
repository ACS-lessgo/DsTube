<template>
  <div class="navBar">
    <button class="MainBtn">DsTube</button>
    <input type="text" placeholder="Search" />
    <button class="profileBtn">Profile</button>
  </div>
  <div class="content">
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" /><br />
    <h1>To do List</h1>
    <input type="text" placeholder="enter task" v-model="taskName" />
    <button @click="addTask(taskName)">Add Task</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }} <button @click="delTask(index)">Delete</button>
      </li>
    </ul>
  </div>
  <footer>
    <div class="footer">
      <p>(©) 2023</p>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("Hello content");
    const taskName = ref("Task Name");
    const tasks = ref([]);
    const addTask = (taskName) => {
      tasks.value.push(`${taskName}`);
    };
    const delTask = (index) => {
      tasks.value.splice(index, 1);
    };

    return {
      message,
      tasks,
      delTask,
      addTask,
      taskName,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

body {
  background-color: black;
  color: white;
  margin: 0px;
  height: 100vh;
  font-family: "Roboto", sans-serif;
}

#app {
  height: 100%;
}

.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10%;
}

.addButton {
  margin-bottom: 5%;
}
.footer {
  background-color: #202020;
  color: white;
  text-align: center;
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 0;
}
.navBar {
  background-color: #202020;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.MainBtn {
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5%;
}

.navBar input[type="text"] {
  background-color: #313131;
  color: #fff;
  border: #313131;
  font-size: 16px;
  padding: 0.5% 10%;
}

.profileBtn{
  background-color: #202020;
  color: #3ea6ff;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid #007bff;
  cursor: pointer;
  border-radius: 5%;
}
</style>
