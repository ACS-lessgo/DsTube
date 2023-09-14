<template>
  <div class="video-card">
    <div class="thumbnail">
      <router-link to="/full"><img :src="thumbnailUrl" :alt="videoTitle" /></router-link>
    </div>
    <div class="info">
      <h3 class="video-title">
        {{ videoTitle }}
      </h3>
      <div class="video-details">
        <span class="views">{{ viewCount }}</span>
      </div>
      <h3 class="channel-name">{{ channelName }}</h3>
      <p class="description">
        {{ description }}
      </p>
      <button class="remove-btn" @click="$emit('remove')">Remove</button>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  videoTitle: String,
  thumbnailUrl: String,
  viewCount: String,
  channelName: String,
  description: String,
});
</script>


<style scoped>
.video-card {
  display: flex;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.thumbnail {
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3%;
  margin-top: 2%;
}

.thumbnail img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

.info {
  flex: 1;
  padding: 10px;
  margin-left: 3%;
  margin-top: 2%;
}

.video-title {
  font-size: 18px;
  margin: 0;
}

.video-details {
  font-size: 14px;
  color: #606060;
  margin-top: 4px;
}

.channel-name {
  font-size: 16px;
  margin-top: 3%;
  margin-bottom: 4px;
}

.description {
  font-size: 14px;
  color: white;
  width: 70%;
}
.remove-btn {
  margin-top: 2%;
  background-color: #202020;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 5%;
}
</style>
