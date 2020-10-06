<template>
  <main id="app">
    <Nav v-if="showNavigation"/>
    <router-view />
  </main>
</template>

<script>
import Nav from '@/components/Nav';
export default {
  name: 'App',
  components: {
    Nav
  },
  computed: {
    showNavigation() {
      return $store.state.showNavigation;
    }
  }
}
</script>

<style>

</style>