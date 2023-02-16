<template>
  <div class="Main">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from './pages/MainPage.vue'
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
@import url('@/assets/css/base.css');
#app {
  margin: 0 auto;
}
</style>
