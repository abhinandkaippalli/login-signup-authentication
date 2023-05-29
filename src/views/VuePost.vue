<template>
    <div>
        <p>Post Page</p>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
import { GET_USER_TOKEN_GETTER } from '../store/storeConstants'

export default {
    name: 'PostPage',
    data() {
        return
    },

    computed: {
        ...mapGetters('auth', {
            token: GET_USER_TOKEN_GETTER,
        })
    },  

    mounted() {
        axios.get(`https://vue-authentication-b4245-default-rtdb.firebaseio.com/tasks.json?auth=${this.token}`)
        .then((response) => {
            console.log(response);
        });
    }
}
</script>

<style scoped></style>