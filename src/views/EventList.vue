<template>
  <div>
    <h1>Events Listing</h1>
    <main class="main">
      <div class="container" v-if="getNekretnine">
        <div class="col-md-12">
          <div class="row">
            <div v-for="event in getNekretnine" :key="event.index">
              <EventCard :event="event" />
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-success" @click="loadMoreNekretnina" v-if="getSize">Load More</button>
      <h3 v-else>No more results !</h3>
    </main>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('takeAllNekretnine');
  },
  data() {
    return {
      events: []
    };
  },
  computed: {
    getNekretnine() {
      return this.$store.getters.getNekretnine;
    },
    getSize() {
      return this.$store.getters.getSize;
    }
  },
  methods: {
    loadMoreNekretnina() {
      this.$store.dispatch('takeAllNekretnine', true);
    }
  }
};
</script>

<style></style>
