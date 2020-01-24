<template>
<div class="fluid-container">
    <SlideConstraction></SlideConstraction>
    <p5></p5>
</div>
  
</template> 
<script>
// @ is an alias to /src
import p5 from "@/components/Projects/p5.vue";
import SlideConstraction from "@/components/SlideConstraction.vue";


export default {
  name: "home",
  components: {
    p5,
    SlideConstraction
    
  }
};
</script>