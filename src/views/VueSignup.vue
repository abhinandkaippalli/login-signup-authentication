<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Signup</h3>
                </div>
                <div class="alert alert-danger" v-if="error">{{ error }}</div>
                <form @submit.prevent="onSignup()">
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
                        <button type="submit" class="btn btn-primary">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
import { SIGNUP_ACTION, LOADING_SPINNER_SHOW_MUTATION } from '../store/storeConstants'
import SignupValidations from '../services/SignupValidation';

export default {
    name: 'SignUpPage',
    data() {
        return {
            email: '',
            password: '',
            errors: [],
            error: '',
        }
    },
    methods: {
        ...mapActions('auth', {
            signup: SIGNUP_ACTION
        }),

        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION
        }),

        async onSignup() {
            let validations = new SignupValidations(this.email, this.password)

            this.errors = validations.checkValidations();
            if ('email' in this.errors || 'password' in this.errors) { // Check if there are any errors in the errors object
                return false;
            }

            //make spinner true
            this.showLoading(true)

            //signup registration
            await this.signup({
                email: this.email,
                password: this.password
            }).catch((error) => {
                this.error = error;
                this.showLoading(false)
            });
            //make spinner false
            this.showLoading(false)
        }
    }
}    
</script>