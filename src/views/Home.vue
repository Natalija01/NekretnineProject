<template>
  <div class="fluid-container noGutter">
    <heroSlide></heroSlide>
    <sorting></sorting>
  </div>
  
</template>

<script>
// @ is an alias to /src
import heroSlide from "@/components/HeroSlide.vue";
import Sorting from "@/components/sorting.vue";

export default {
  name: "home",
  components: {
    heroSlide,
    Sorting
  }
};
</script>
<style  scoped>

</style>