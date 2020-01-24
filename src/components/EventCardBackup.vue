<template>
  <div class="col-md-12 card" style="width: 18rem;">
    <div
      :id="'carouselExampleFade' + event.AuxID"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="event.Slika[0]" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" v-for="slika in event.Slika" :key="slika.id">
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

    <div class="card-body">
      <h5 class="card-title">
        <a
          class="event-link"
          @click="showEstate"
        >{{event.VrstaNekretnine}} na PRODAJU {{event.Grad}}</a>
      </h5>
      <h5 class="card-title">{{ event.VrstaNekretnine }}</h5>
      <p class="card-text">{{ event.Opis }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ event.Cena }} {{ event.Valuta }}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>