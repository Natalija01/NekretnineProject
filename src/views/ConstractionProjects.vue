<template>
  <div>
    <div class="fluid-container">
      <SlideConstraction></SlideConstraction>
    </div>
    <div class="container">
      <div class="constractionProjects">
        <h1 class="mb-3 mt-3" style="text-align: left; ">
          Constraction Projects
        </h1>
        <div class="card-group">
          <div class="card">
            <router-link to="/project1">
              <img
                src="http://realestate360.me/imperijaImg/TProject1.PNG"
                class="card-img-top"
                alt="..."
            /></router-link>
            <div class="card-body">
              <h5 class="card-title">Project no 1</h5>
            </div>
          </div>
          <div class="card">
            <router-link to="/project2">
              <img
                src="http://realestate360.me/imperijaImg/project2.PNG"
                class="card-img-top"
                alt="..."
            /></router-link>
            <div class="card-body">
              <h5 class="card-title">Project no 2</h5>
            </div>
          </div>
          <div class="card">
            <router-link to="/project3">
              <img
                src="http://realestate360.me/imperijaImg/project3.PNG"
                class="card-img-top"
                alt="..."
            /></router-link>
            <div class="card-body">
              <h5 class="card-title">Project no 3</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-group">
        <div class="card">
          <router-link to="/project4">
            <img
              src="http://realestate360.me/imperijaImg/project4.PNG"
              class="card-img-top"
              alt="..."
          /></router-link>
          <div class="card-body">
            <h5 class="card-title">Project no 4</h5>
          </div>
        </div>
        <div class="card">
          <router-link to="/project5">
            <img
              src="http://realestate360.me/imperijaImg/project5.PNG"
              class="card-img-top"
              alt="..."
          /></router-link>
          <div class="card-body">
            <h5 class="card-title">Project no 5</h5>
          </div>
        </div>
        <div class="card">
          <div class="card-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideConstraction from "@/components/SlideConstraction.vue";
export default {
  components: {
    SlideConstraction
  }
};
</script>

<style scoped>
.card:hover .card-img-top {
  opacity: 0.7;
}
</style>
