<template>
  <div>
    <input type="text" placeholder="First Name" v-model="FirstName" />
    <input type="text" placeholder="Last Name" v-model="LastName" />
    <input type="text" placeholder="Mobile Number" v-model="MobileNumber" />
    <input type="text" placeholder="Email" v-model="Email" />
    <button class="UpdateBtn">Update</button>
  </div>
  <div class="details">
    <h3>Details</h3>
    <h4>Name : {{ FirstName + " " + LastName }}</h4>
    <h4>Mobile Number : {{ MobileNumber }}</h4>
    <h4>Email : {{ Email }}</h4>
  </div>
</template>

<script setup>
import { ref } from "vue";
const FirstName = ref("");
const LastName = ref("");
const MobileNumber = ref("");
const Email = ref("");
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  color: white;
}

input[type="text"] {
  width: 50%;
  padding: 10px;
  margin: 1%;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #181818;
  color: white;
  text-align: left;
}
.details {
  color: white;
  text-align: left;
}
.UpdateBtn {
  background-color: #202020;
  color: #3ea6ff;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid #007bff;
  cursor: pointer;
  border-radius: 5%;
  width: 10%;
}
</style>
