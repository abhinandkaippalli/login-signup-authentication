<script>
import { RouterView } from 'vue-router'
import VueNavbar from './components/VueNavbar.vue';
import TheLoader from './components/TheLoader.vue';
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    VueNavbar,
    TheLoader
  },
  computed: {
    ...mapState({
      showLoading: (state) => state.showLoading
    })
  }
}


</script>

<template>
  <div>
    <VueNavbar />
    <TheLoader v-if="showLoading" />
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
