/* eslint-disable */
<template>
  <div class="container">
    <h2 style="text-align:left; margin-bottom:20px">Project no 1</h2>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{
        backgroundImage: 'url(' + image + ')',
        width: '340px',
        height: '220px'
      }"
    ></div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      images: [
        "http://realestate360.me/imperijaImg/Project1/img1.PNG",
        "http://realestate360.me/imperijaImg/Project1/Capture.PNG",
        "http://realestate360.me/imperijaImg/Project1/Capture1.PNG",
        "http://realestate360.me/imperijaImg/Project1/Capture3.PNG",
        "http://realestate360.me/imperijaImg/Project1/Captur4.PNG",
        "http://realestate360.me/imperijaImg/Project1/Capture5.PNG",
        "http://realestate360.me/imperijaImg/Project1/Capture6.PNG",
        "http://realestate360.me/imperijaImg/Project1/Capture7.PNG",
        "http://realestate360.me/imperijaImg/Project1/Capture9.PNG",
        "http://realestate360.me/imperijaImg/Project1/Capture11.PNG"
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
