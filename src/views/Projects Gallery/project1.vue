<template>
  <div class="fluid-container">
    <SlideConstraction></SlideConstraction>
    <p1></p1>
  </div>
</template>
<script>
// @ is an alias to /src
import p1 from '@/components/Projects/p1.vue';
import SlideConstraction from '@/components/SlideConstraction.vue';

export default {
  name: 'home',
  components: {
    p1,
    SlideConstraction
  }
};
</script>
