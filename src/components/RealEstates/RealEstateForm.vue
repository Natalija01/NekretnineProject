<template>
  <div>
    <form v-on:submit.prevent="dodajNekretninu()" @submit.prevent="submit">
      <div class="form-group" :class="{ 'form-group--error': $v.sifra.$error }">
        <label for="exampleFormControlInput1">Sifra nekretnine</label>
        <input
          type="text"
          class="form-control form__input"
          v-model.trim="$v.sifra.$model"
          id="exampleFormControlInput1"
          placeholder="exmple : #40059"
          v-model="sifra"
        />
      </div>
      <template v-if="$v.sifra.$error">
        <div class="error" v-if="!$v.sifra.required">
          Field is required
        </div>
        <tree-view
          :data="$v.sifra"
          :options="{ rootObjectKey: '$v.sifra', maxDepth: 2 }"
        ></tree-view
      ></template>
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.povrsina.$error }"
      >
        <label for="exampleFormControlInput1">Povrsina</label>
        <input
          type="text"
          class="form-control form__input"
          v-model.trim="$v.povrsina.$model"
          id="exampleFormControlInput3"
          placeholder="100"
          v-model="povrsina"
        />
      </div>
      <template v-if="$v.sifra.$error">
        <div class="error" v-if="!$v.povrsina.required">
          Field is required
        </div>
        <div class="error" v-if="!$v.povrsina.numeric">
          You need to enter numerical value
        </div>
        <tree-view
          :data="$v.sifra"
          :options="{ rootObjectKey: '$v.sifra', maxDepth: 2 }"
        ></tree-view
      ></template>
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.cijena.$error }"
      >
        <label for="exampleFormControlInput1">Cijena</label>
        <input
          type="text"
          class="form-control form__input"
          v-model.trim="$v.cijena.$model"
          id="exampleFormControlInput2"
          placeholder="100000"
          v-model="cijena"
        />
      </div>
      <template v-if="$v.cijena.$error">
        <div class="error" v-if="!$v.cijena.required">
          Field is required
        </div>
        <div class="error" v-if="!$v.cijena.numeric">
          You need to enter numerical value
        </div>
        <tree-view
          :data="$v.sifra"
          :options="{ rootObjectKey: '$v.sifra', maxDepth: 2 }"
        ></tree-view
      ></template>

      <div
        class="form-group"
        :class="{ 'form-group--error': $v.tipOglasa.$error }"
      >
        <label for="exampleFormControlSelect1">Tip oglasa</label>
        <select
          class="form-control form__input"
          v-model.trim="$v.tipOglasa.$model"
          id="exampleFormControlSelect1"
          @change="uzmiTipOglasa"
        >
          <option>Prodaja</option>
          <option>Izdavanje</option>
          <option>Zamjena</option>
        </select>
      </div>
      <template v-if="$v.tipOglasa.$error">
        <div class="error" v-if="!$v.tipOglasa.required">
          Field is required
        </div>

        <tree-view
          :data="$v.sifra"
          :options="{ rootObjectKey: '$v.tipOglasa', maxDepth: 2 }"
        ></tree-view
      ></template>
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.vrstaNekretnine.$error }"
      >
        <label for="exampleFormControlSelect1">Tip nekretnine</label>
        <select
          class="form-control form__input"
          v-model.trim="$v.vrstaNekretnine.$model"
          id="exampleFormControlSelect1"
          @change="uzmiVrstuNekretnine"
        >
          <option>Plac</option>
          <option>Stan</option>
          <option>Kuca</option>
          <option>Garaza</option>
        </select>
      </div>
      <template v-if="$v.vrstaNekretnine.$error">
        <div class="error" v-if="!$v.vrstaNekretnine.required">
          Field is required
        </div>

        <tree-view
          :data="$v.tipOglasa"
          :options="{ rootObjectKey: '$v.vrstaNekretnine', maxDepth: 2 }"
        ></tree-view
      ></template>
      <div class="form-group" :class="{ 'form-group--error': $v.grad.$error }">
        <label for="exampleFormControlSelect1">Grad</label>
        <select
          class="form-control form__input"
          v-model.trim="$v.grad.$model"
          id="exampleFormControlSelect1"
          @change="uzmiGrad"
        >
          <option v-for="grad in gradovi" :key="grad.id">{{ grad }}</option>
        </select>
      </div>
      <template v-if="$v.grad.$error">
        <div class="error" v-if="!$v.grad.required">
          Field is required
        </div>

        <tree-view
          :data="$v.sifra"
          :options="{ rootObjectKey: '$v.grad', maxDepth: 2 }"
        ></tree-view
      ></template>
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
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="opis"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="exampleFormControlFile1">Dodaj slike</label>
        <input
          type="file"
          class="form-control-file "
          id="exampleFormControlFile1"
          multiple
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary mb-2"
        :disabled="submitStatus === 'PENDING'"
      >
        Kreiraj novu nekretninu
      </button>
      <p class="typo__p" v-if="submitStatus === 'OK'">
        Thanks for your submission!
      </p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Please fill the form correctly.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>
<script>
import { required, numeric } from 'vuelidate/lib/validators';

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
      vrstaNekretnine: '',
      submitStatus: null
    };
  },
  validations: {
    sifra: {
      required
    },
    povrsina: {
      required,
      numeric
    },
    cijena: {
      required,
      numeric
    },
    tipOglasa: {
      required
    },
    grad: {
      required
    },
    slika: {
      required
    },
    vrstaNekretnine: {
      required
    }
  },
  methods: {
    submit() {
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING';
        setTimeout(() => {
          this.submitStatus = 'OK';
        }, 500);
      }
    },
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
<style></style>
