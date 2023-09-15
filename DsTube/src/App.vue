<template>
  <div class="dsyt-parent-contents-container">
    <NavBar></NavBar>
    <router-view />
  </div>
  <Footer></Footer>
</template>

<script setup>
import {NavBar, Footer} from './components'
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

body {
  background-color: #181818;
  color: white;
  margin: 0px;
  height: 100vh;
  font-family: "Roboto", sans-serif;
}

.dsyt-parent-contents-container{
  min-height: 100vh;
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
</style>
