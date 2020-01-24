<template>
<div class="fluid-container">
    <SlideConstraction></SlideConstraction>
    <p3></p3>
</div>
  
</template> 
<script>
// @ is an alias to /src
import p3 from "@/components/Projects/p3.vue";
import SlideConstraction from "@/components/SlideConstraction.vue";


export default {
  name: "home",
  components: {
    p3,
    SlideConstraction
    
  }
};
</script>