<template>
  <div>
    <form v-on:submit.prevent="dodajNekretninu()">
      <div class="form-group">
        <label for="exampleFormControlInput1">Sifra nekretnine</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="exmple : #40059"
          v-model="sifra"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Povrsina</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="100 metara kvadratnih"
          v-model="povrsina"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Cijena</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="100000"
          v-model="cijena"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Tip oglasa</label>
        <select class="form-control" id="exampleFormControlSelect1" @change="uzmiTipOglasa">
          <option>Prodaja</option>
          <option>Izdavanje</option>
          <option>Zamjena</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Tip nekretnine</label>
        <select class="form-control" id="exampleFormControlSelect1" @change="uzmiVrstuNekretnine">
          <option>Plac</option>
          <option>Stan</option>
          <option>Kuca</option>
          <option>Garaza</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Grad</label>
        <select class="form-control" id="exampleFormControlSelect1" @change="uzmiGrad">
          <option v-for="grad in gradovi" :key="grad.id">{{grad}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput4">Address</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput44"
          placeholder="Ulica bb"
          v-model="adresa"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Opis</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="opis"></textarea>
      </div>

      <div class="form-group">
        <label for="exampleFormControlFile1">Dodaj slike</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1"  multiple/>
      </div>
      <button type="submit" class="btn btn-primary mb-2">Kreiraj novu nekretninu</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sifra: '',
      povrsina: '',
      cijena: 0,
      tipOglasa: '',
      grad: '',
      adresa: '',
      opis: '',
      slika: [
        'http://realestate360.me/wp-content/uploads/2018/02/1-4-835x467.jpg'
      ],
      gradovi: [
        'Podgorica',
        'Niksic',
        'Pljevlja',
        'Bijelo Polje',
        'Cetinje',
        'Bar',
        'Herceg Novi',
        'Berane',
        'Budva',
        'Ulcinj',
        'Tivat',
        'Rozaje',
        'Kotor',
        'Danilovgrad',
        'Mojkovac',
        'Plav',
        'Kolasin',
        'Zabljak',
        'Pluzine',
        'Andrijevica',
        'Savnik'
      ],
      vrstaNekretnine: ''
    };
  },
  methods: {
    uzmiTipOglasa(event) {
      this.tipOglasa = event.target.value;
    },
    uzmiGrad(event) {
      this.grad = event.target.value;
    },
    uzmiVrstuNekretnine(event) {
      this.vrstaNekretnine = event.target.value;
    },
    dodajNekretninu() {
      const novaNekretnina = {
        AuxID: this.sifra,
        Cena: this.cijena,
        DeoGrada: this.adresa,
        Grad: this.grad,
        Slika: this.slika,
        Opis: this.opis,
        Drzava: 'Crna Gora',
        Status: 'Aktivan',
        TipOglasa: this.tipOglasa,
        Valuta: 'EUR',
        VrstaNekretnine: this.vrstaNekretnine,
        Ukupnapovršina: this.povrsina
      };
      this.$store.dispatch('novaNekretnina', novaNekretnina);
    }
  }
};
</script>
<style >
</style>