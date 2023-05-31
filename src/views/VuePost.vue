<template>
    <div>
        <h3>Posts Details</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex';
import { GET_USER_TOKEN_GETTER, LOADING_SPINNER_SHOW_MUTATION } from '../store/storeConstants'
import axiosInstance from '../services/AxiosTokenInstance';

export default {
    name: 'PostPage',
    data() {
        return {
            posts: []
        }
    },

    // computed: {
    //     ...mapGetters('auth', {
    //         token: GET_USER_TOKEN_GETTER,
    //     })
    // },

    mounted() {
        this.showLoading(true);

        axiosInstance.get(`https://vue-authentication-b4245-default-rtdb.firebaseio.com/tasks.json`)
            .then((response) => {
                this.formatPosts(response.data);
                this.showLoading(false);
            }).catch(() => {
                this.showLoading(false)
            })
    },

    methods: {
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION
        }),

        formatPosts(posts) {
            for (let key in posts) {
                this.posts.push({ ...posts[key], id: key })
            }
            console.log(this.posts);
        }
    }
}
</script>

<style scoped></style>