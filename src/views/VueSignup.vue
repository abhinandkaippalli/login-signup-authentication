<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Signup</h3>
                </div>
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
import SignupValidations from '../services/SignupValidation';

export default {
    name: 'SignUpPage',
    data() {
        return {
            email: '',
            password: '',
            errors: [],
        }
    },
    methods: {
        onSignup() {
            let validations = new SignupValidations(this.email, this.password)

            this.errors = validations.checkValidations();
            if (Object.keys(this.errors).length) { // Check if there are any errors in the errors object
                return false;
            }
        }
    }
}    
</script>