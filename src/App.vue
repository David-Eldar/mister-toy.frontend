<template>
  <section class="'main-app-container'">
    <app-header />
    <router-view />
    <!-- <app-footer /> -->
  </section>

</template>

<script>
import appHeader from './views/app-header.vue'
// import appFooter from './views/app-footer.vue'

export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  components: {
    appHeader,
    // appFooter
  }
}
</script>