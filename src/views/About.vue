<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="http://realestate360.me/imperijaImg/TProject1.PNG"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="http://realestate360.me/imperijaImg/project2.PNG"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ events.AuxID }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    nekretnina: Object
  }
};
</script>

<style lang="scss" scoped></style>
