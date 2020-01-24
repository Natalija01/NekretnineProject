<template>
<div class="fluid-container">
    <SlideConstraction></SlideConstraction>
    <p2></p2>
</div>
  
</template> 
<script>
// @ is an alias to /src
import p2 from "@/components/Projects/p2.vue";
import SlideConstraction from "@/components/SlideConstraction.vue";


export default {
  name: "home",
  components: {
    p2,
    SlideConstraction
    
  }
};
</script>