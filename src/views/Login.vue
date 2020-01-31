<template>
  <div class="login">
    <img alt="Imperija logo" src />
    <LoginComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue';
export default {
  name: 'home',
  components: {
    LoginComponent
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/dashboard');
      }
    }
  }
};
</script>
