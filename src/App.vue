<script setup>
import { RouterLink, RouterView } from 'vue-router'
import VueNavbar from './components/VueNavbar.vue';

</script>

<template>
  <div>
    <VueNavbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
