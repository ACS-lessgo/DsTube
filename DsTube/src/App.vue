<template>
  <NavBar></NavBar>
  <div>
    <VideoCard
      v-for="(video, index) in videoList"
      :key="index"
      :thumbnailUrl="video.thumbnailUrl"
      :videoTitle="video.videoTitle"
      :viewCount="video.viewCount"
      :channelName="video.channelName"
      :description="video.description"
      @remove="handleRemove(index)"
    ></VideoCard>
  </div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import VideoCard from "./components/VideoCard.vue";

const videoList = ref([
  {
    thumbnailUrl:
      "https://c4.wallpaperflare.com/wallpaper/445/577/292/tom-and-jerry-fur-flying-adv-v2-hd-wallpapers-for-mobile-phones-tablet-and-laptops-2560%C3%971600-wallpaper-preview.jpg",
    videoTitle:
      "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids by WB Kids",
    viewCount: "200,785,000 views",
    channelName: "WB Kids",
    description:
      "Did you know that there are only 25 classic Tom & Jerry episodes that were displayed in a widescreen CinemaScope from the 1950s? Enjoy a compilation filled with some of the best moments from these full screen episodes!",
  },
  {
    thumbnailUrl:
      "https://c4.wallpaperflare.com/wallpaper/539/635/691/tom-and-jerry-shiver-me-whiskers-desktop-wallpaper-hd-2560%C3%971600-wallpaper-preview.jpg",
    videoTitle:
      "Tom and Jerry 2018 | 2 Fast 2 Furious + Tom and Jerry in Hospital",
    viewCount: "9,174,395 views",
    channelName: "WB Kids",
    description:
      "Did you know that there are only 25 classic Tom & Jerry episodes that were displayed in a widescreen CinemaScope from the 1950s? Enjoy a compilation filled with some of the best moments from these full screen episodes! ",
  },
  {
    thumbnailUrl:
      "https://c4.wallpaperflare.com/wallpaper/317/219/814/bom-cartoon-tom-and-jerry-wallpaper-preview.jpg",
    videoTitle:
      "Tom and Jerry - Fit to be tied",
    viewCount: "64,459,641 views",
    channelName: "MovieCon Animation",
    description:
      "Did you know that there are only 25 classic Tom & Jerry episodes that were displayed in a widescreen CinemaScope from the 1950s? Enjoy a compilation filled with some of the best moments from these full screen episodes!",
  },
]);

const handleRemove = (index) => {
  videoList.value.splice(index, 1);
};
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
</style>
