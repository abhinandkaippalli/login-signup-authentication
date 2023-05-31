<template>
  <div>
    <div>Home Page</div>
    <div>
        <router-link to="/posts">Go to posts page</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomePage',
})
</script>