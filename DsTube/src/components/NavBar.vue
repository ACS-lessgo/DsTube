<template>
  <div class="navBar">
      <button class="MainBtn">DsTube</button>
    <input type="text" placeholder="Search" />
    <router-link to="/profile">
      <button class="profileBtn">Profile</button>
    </router-link>
  </div>
</template>

<script>

</script>

<style scoped>
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

.profileBtn {
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
