<template>
  <div class="margin-container">
    <!--MAPS -->
    <div class="container-fluid">
      <div class="row" style="padding-bottom: 50px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.6042959105653!2d18.83154375034075!3d42.286969547605985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd49850397937%3A0x7b23c1173f116a85!2sVilla%20Imperija!5e0!3m2!1sen!2s!4v1578512842568!5m2!1sen!2s"
          width="100%"
          height="420"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!--Contact-->

    <div class="container">
      <h3 class="text-left">CONTACT FORM</h3>
      <br />

      <div class="row text-left">
        <div class="col-lg-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eros ipsum, dapibus vitae lectus sed, pretium feugiat elit. Integer
            id porta mi.
          </p>
          <form @submit.prevent="submit">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.name.$error }"
            >
              <input
                id="size"
                class="form__input form-control"
                v-model.trim="$v.name.$model"
                @input="setName($event.target.value)"
                name="name"
                placeholder="Name..."
              />
            </div>
            <template v-if="$v.name.$error">
              <div class="error" v-if="!$v.name.required">
                Field is required
              </div>
              <div class="error" v-if="!$v.name.minLength">
                Name must have at least
                {{ $v.name.$params.minLength.min }} letters.
              </div>
              <tree-view
                :data="$v.name"
                :options="{ rootObjectKey: '$v.name', maxDepth: 2 }"
              ></tree-view
            ></template>

            <div
              class="form-group"
              :class="{ 'form-group--error': $v.phone.$error }"
            >
              <input
                id="size"
                class="form__input form-control"
                v-model.trim="$v.phone.$model"
                @input="setPhone($event.target.value)"
                name="phone"
                placeholder="Phone..."
              />
            </div>
            <template v-if="$v.phone.$error">
              <div class="error" v-if="!$v.phone.required">
                Field is required
              </div>
              <tree-view
                :data="$v.phone"
                :options="{ rootObjectKey: '$v.phone', maxDepth: 2 }"
              ></tree-view
            ></template>

            <div
              class="form-group"
              :class="{ 'form-group--error': $v.email.$error }"
            >
              <input
                id="size"
                class="form__input form-control"
                v-model.trim="$v.email.$model"
                @input="setEmail($event.target.value)"
                name="email"
                placeholder="E-mail..."
              />
            </div>
            <template v-if="$v.email.$error">
              <div class="error" v-if="!$v.email.required">
                Field is required
              </div>
              <tree-view
                :data="$v.email"
                :options="{ rootObjectKey: '$v.email', maxDepth: 2 }"
              ></tree-view
            ></template>

            <div
              class="form-group"
              :class="{ 'form-group--error': $v.text.$error }"
            >
              <textarea
                id="size1"
                class="form__input form-control"
                v-model.trim="$v.text.$model"
                @input="setText($event.target.value)"
                name="text"
                style="height:150px;"
              ></textarea>
            </div>
            <template v-if="$v.text.$error">
              <div class="error" v-if="!$v.text.maxLength">
                Name must have at max
                {{ $v.text.$params.maxLength.max }} letters.
              </div>
              <tree-view
                :data="$v.text"
                :options="{ rootObjectKey: '$v.text', maxDepth: 2 }"
              ></tree-view
            ></template>
            <br />

            <button
              class="btn btn-primary"
              type="submit"
              :disabled="submitStatus === 'PENDING'"
            >
              Submit!
            </button>
            <p class="typo__p" v-if="submitStatus === 'OK'">
              Thanks for your submission!
            </p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">
              Please fill the form correctly.
            </p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>

            <br />
            <br />
          </form>
        </div>
        <div class="col-lg-4">
          <b>CONTACT INFO:</b>
          <br />
          <br />Imperija <br />Jadranski put bb <br />85310 Budva
          <br />Montenegro
          <br />

          <br />
          <br />

          <br />Mobile: +382 67 474 392 <br />Fax: +382 33 457 001, 457 002, 457
          003 <br />Skype: imperijabudva <br />E-mail:
          <a href="mailto:imperijabudva@t-com.me">imperijabudva@t-com.me</a>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      text: '',
      submitStatus: null
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    phone: {
      required
    },
    email: {
      required
    },
    text: {
      maxLength: maxLength(1000)
    }
  },
  methods: {
    setName(value) {
      this.name = value;
      this.$v.name.$touch();
    },
    setPhone(value) {
      this.phone = value;
      this.$v.phone.$touch();
    },
    setText(value) {
      this.text = value;
      this.$v.text.$touch();
    },
    setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
    },

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
    }
  }
};
</script>

<style scoped>
.margin-container {
  margin-bottom: 60px;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
