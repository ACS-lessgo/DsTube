<template>
  <div class="card">
  <img :src="imageSource" alt="Image Description">
  <div class="card-content">
      <h3>{{ cardTitle }}</h3>
      <h5>{{ viewCount }}</h5>
      <h3>{{ creatorName }}</h3>
      <input type="text" placeholder="Add a comment...">
     
  </div>
</div>
</template>


<script setup>
import { ref } from 'vue';
const cardTitle = ref('Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids by WB Kids');
const viewCount = ref('200,785,746 views');
const creatorName = ref('WB Kids');
const imageSource = ref('https://c4.wallpaperflare.com/wallpaper/445/577/292/tom-and-jerry-fur-flying-adv-v2-hd-wallpapers-for-mobile-phones-tablet-and-laptops-2560%C3%971600-wallpaper-preview.jpg')
</script>


<style scoped>
  .card{
      margin-top: 20px;
      margin-left: 10%;
      margin-right: 10%;
      align-items: center;
  }
  input[type="text"] {
  background-color: #313131;
  color: #fff;
  border: #313131;
  font-size: 16px;
  padding: 0.5% 10%;
}
</style>


  