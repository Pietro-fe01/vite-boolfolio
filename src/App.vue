<script>
import AppHeader from './components/AppHeader/AppHeader.vue';
import AppFooter from './components/AppFooter/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
};
</script>

<template>
  <div>
    <AppHeader />

    

    <AppFooter />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
