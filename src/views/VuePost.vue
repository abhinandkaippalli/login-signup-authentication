<template>
    <div>
        <p>Post Page</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PostPage',
    data() {
        return
    },
    mounted() {
        axios.get(`https://vue-authentication-b4245-default-rtdb.firebaseio.com/tasks.json`)
        .then((response) => {
            console.log(response);
        });
    }
}
</script>

<style scoped></style>