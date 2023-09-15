<template>
  <div class="LandingContainer">
    <VideoCard
      v-for="(video,index) in VideoList"
      :key="index"
      :thumbnailUrl="video.imgSrc"
      :videoTitle="video.title"
      :viewCount="video.views"
      :channelName="video.creator.firstname+video.creator.lastname"
      :description="video.desc"
      @remove="handleRemove(index)"
    ></VideoCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VideoCard } from "../components";
import VideoData from "../assets/video.json"

//const videoList = ref([]);
const VideoList = ref(VideoData);

const handleRemove = (index) => {
  // videoList.value.splice(index, 1);
  VideoList.value.splice(index, 1);
};

// onMounted(async () => {
//   try {
//     const response = await fetch("../assets/video.json"); 
//     if (response.ok) {
//       const data = await response.json();
//       videoList.value = data;
//     } else {
//       console.error("Failed to fetch data");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
</script>

<style scoped>
/* .LandingContainer {
  margin-bottom: 3%;
} */
</style>
