<template>
  <div class="LandingContainer">
    <VideoCard
    @goToFull="handleGoToFull"
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
import { ref} from "vue";
import VideoCard from "./VideoCard.vue";
import VideoData from "../assets/video.json"

const VideoList = ref(VideoData);
const emit = defineEmits(['navigate']);
const handleRemove = (index) => {
  VideoList.value.splice(index, 1);
};

const handleGoToFull = () =>{
  emit('navigate', 'FullCardView');
}
</script>

<style scoped>

</style>
