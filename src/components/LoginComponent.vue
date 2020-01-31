<template>
  <div class="hello">
    <form
      style="width:400px; margin: 0 auto;"
      v-on:submit.prevent="submitForm()"
    >
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Email address"
          :class="status($v.email)"
          v-model="$v.email.$model"
        />
        <small class="form-text errorText" v-if="!$v.email.email"
          >Email is in wrong format.</small
        >
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          :class="status($v.password)"
          v-model="$v.password.$model"
        />
        <small class="form-text errorText" v-if="!$v.password.minLength">
          Password must have at least
          {{ $v.password.$params.minLength.min }} letters..
        </small>
      </div>
      <button class="btn btn-primary" :disabled="submitBtn">Login</button>
    </form>
    <div class="errorText">{{ getError }}</div>
  </div>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators/';
export default {
  data() {
    return {
      kvLogo: 'Manage',
      password: '',
      email: '',
      submitBtn: false
    };
  },
  name: 'LoginComponent',
  methods: {
    submitForm() {
      this.$store.dispatch('signInUser', {
        email: this.email,
        password: this.password
      });
    },
    onVerify() {
      this.submitBtn = false;
    },
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      };
    }
  },
  computed: {
    getError() {
      return this.$store.getters.getError;
    },
    validation() {
      if (
        this.$v.email.required &&
        !this.$v.email.$error &&
        this.$v.password.required &&
        this.$v.password.minLength
      ) {
        this.onVerify();
        return true;
      } else {
        return false;
      }
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}
.dirty {
  border-color: #5a5;
  background: #efe;
}
.dirty:focus {
  outline-color: #8e8;
}
.error {
  border-color: red;
  background: #fdd;
}
.errorText {
  color: red;
}
.error:focus {
  outline-color: #f99;
}
</style>
