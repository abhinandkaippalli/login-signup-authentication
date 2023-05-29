<template>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div>
          <div>
            <h3>Login</h3>
          </div>
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
          <form @submit.prevent="onLogin()">
            <div class="form-group">
              <label for="">Email</label>
              <input type="text" class="form-control" v-model.trim="email" />
              <div class="error" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input type="password" class="form-control" v-model.trim="password" />
              <div class="error" v-if="errors.password">{{ errors.password }}</div>
            </div>
  
            <div class="my-3">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import { mapState } from 'vuex'
  import { mapActions } from 'vuex';
import SignupValidations from '../services/SignupValidation'
import { LOGIN_ACTION } from '../store/storeConstants';
  
  export default {
    name: 'LoginPage', // Use a multi-word component name
    data() {
      return {
        email: '',
        password: '',
        errors: [], 
        error:'',// Initialize errors as an empty object
      }
    },
    methods: {
      ...mapActions('auth', {
        login: LOGIN_ACTION,
      }),
      async onLogin() {
        let validations = new SignupValidations(this.email, this.password)
  
        this.errors = validations.checkValidations();
        if (Object.keys(this.errors).length) { // Check if there are any errors in the errors object
          return false;
        }

        // Login do here
        try {
          await this.login({
            email: this.email, 
            password: this.password
          })
        } catch (error) {
          this.error = error;
        } 
      }
    }
  };
  </script>
  