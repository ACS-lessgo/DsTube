<template>
  <div class="card">
    <img class="fullImg" :src="imageSource" alt="Image Description" />
    <div class="card-content">
      <h3>{{ cardTitle }}</h3>
      <h5>{{ viewCount }}</h5>
      <span class="spanText"  v-if="likes >= 15" style="color: green">Trending</span>
      <span class="spanText" v-if="likes >= 10" style="color: red">Popular</span>
      <h3>{{ creatorName }}</h3>
      <button class="pageBtn" @click="addLike">Like  {{ likes }}</button>
      <button class="pageBtn" @click="removeLike">Dislike </button>
      <button class="pageBtn">Share</button>
      <button class="subBtn" @click="toggleSubscribe">{{subscribeText}}</button>
      <input type="text" placeholder="Add a comment..." />
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";
const cardTitle = ref(
  "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids by WB Kids"
);
const viewCount = ref("200,785,746 views");
const creatorName = ref("WB Kids");
const imageSource = ref(
  "https://i.ytimg.com/vi/t0Q2otsqC4I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFcrz2zM6mPUmJiCsC7c7suOzSug"
);

const likes = ref(0);

const addLike = () => {
  likes.value++;
};
const removeLike = () => {
  if(likes.value>0){  likes.value--;}
};
const isSubscribed = ref(false)
const toggleSubscribe = () => {
  isSubscribed.value = !isSubscribed.value;
};

const subscribeText = computed(() => {
  return isSubscribed.value ? "Subscribed" : "Subscribe";
});
</script>

<style scoped>
.card {
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  align-items: center;
}
input[type="text"] {
  margin-top: 4%;
  background-color: #313131;
  color: #fff;
  border: #313131;
  font-size: 16px;
  padding: 0.5% 10%;
  width: 70%;
  text-align: center;
}
.pageBtn {
  margin-top: 2%;
  margin-left: 2%;
  background-color: #202020;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 5%;
}

.subBtn{
  margin-left: 12%;
  /* margin-top: -7rem; */
  background-color: #f50b0b;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5%;
} 

.spanText{
  padding: 3px;
}

.fullImg{
  width: 750px;
  height: 500px;
}
</style>
