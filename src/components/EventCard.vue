<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-img-top">
        <div
          :id="'carouselExampleFade' + event.AuxID"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <p v-if="user">
              Dodati neko fino dugme koje ce editovati post (*ovo se vidi samo
              ako je user ulogovan)
            </p>
            <div class="carousel-item active">
              <img :src="event.Slika[0]" class="d-block w-100" alt="..." />
            </div>
            <div
              class="carousel-item"
              v-for="slika in event.Slika"
              :key="slika.id"
            >
              <img :src="slika" class="d-block w-100" alt="..." />
            </div>
          </div>

          <a
            class="carousel-control-prev"
            :href="'#carouselExampleFade' + event.AuxID"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            :href="'#carouselExampleFade' + event.AuxID"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          {{ event.VrstaNekretnine }} na PRODAJU {{ event.Grad }}
        </h5>
        <p class="card-text">{{ event.Opis }}.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Sifra nekretnine : # {{ event.AuxID }}</li>
        <li class="list-group-item">
          Vrsta nekretnine : {{ event.VrstaNekretnine }}
        </li>
        <li class="list-group-item">
          Povrsina: {{ event.Ukupnapovršina }}
          m
          <sup>2</sup>
        </li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link"
          >Cijena : {{ event.Cena }} {{ event.Valuta }}</a
        >
      </div>
      <div class="card-body">
        <a href="#" class="card-link">Kontaktirajte nas</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  },
  methods: {
    showEstate() {
      this.$store.dispatch('sendToNekretninaView', this.event);
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style scoped>
.w-100 {
  height: 200px;
}
.card {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
