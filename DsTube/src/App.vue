<template>
  <div class="dsyt-parent-contents-container">
    <NavBar @navigate="navigateView" />
    <div>
      <component :is="currentView" @navigate="navigateView" />
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import LandingView from "./components/LandingView.vue";
import ProfileView from "./components/ProfileView.vue";
import FullCardView from "./components/FullCardView.vue";
import VideoCard from "./components/VideoCard.vue";
import { ref } from "vue";
const componentMapping = {
  LandingView,
  ProfileView,
  FullCardView,
  VideoCard
};

const currentView = ref(componentMapping.LandingView);

const navigateView = (viewName) => {
  //console.log(`Navigating to: ${viewName}`);
  if (componentMapping[viewName]) {
    currentView.value = componentMapping[viewName];
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

body {
  background-color: #181818;
  color: white;
  margin: 0px;
  height: 100vh;
  font-family: "Roboto", sans-serif;
}

.dsyt-parent-contents-container {
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
