<template>
<div class="fluid-container">
    <SlideConstraction></SlideConstraction>
    <p4></p4>
</div>

</template> 
<script>
// @ is an alias to /src
import p4 from "@/components/Projects/p4.vue";
import SlideConstraction from "@/components/SlideConstraction.vue";


export default {
  name: "home",
  components: {
    p4,
    SlideConstraction
    
  }
};
</script>