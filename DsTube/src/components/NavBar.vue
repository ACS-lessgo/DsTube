<template>
  <div class="navBar">
    <button class="MainBtn">DsTube</button>
    <input type="text" placeholder="Search" />
    <button @click="goToHome" class="HomeBtn">Home</button>
    <button @click="goToAbout" class="profileBtn">Profile</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['navigate'])
const goToHome = () => {
  emit('navigate', 'LandingView');
};

const goToAbout = () => {
  emit('navigate', 'ProfileView');
};
</script>

<style scoped>
.navBar {
  background-color: #202020;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  /* margin-left:3rem; */
}
.HomeBtn {
  background-color: #202020;
  color: #3ea6ff;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid #007bff;
  cursor: pointer;
  border-radius: 5%;
  /* margin-left: 20rem; */
  /* margin-right: 0; */
}


/* .navBar:only-child .HomeBtn {
  margin-left: 23rem;
}
.navBar:only-child .profileBtn{
  margin-left: 23rem;
} */
</style>
