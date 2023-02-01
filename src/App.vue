<script>
import AppHeader from './components/AppHeader/AppHeader.vue';
import AppFooter from './components/AppFooter/AppFooter.vue';
import AppMain from './components/AppMain/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
};
</script>

<template>
  <div>
    <AppHeader />

    <AppMain />

    <AppFooter />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
