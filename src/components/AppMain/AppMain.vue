<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>

export default {
    name : 'AppMain',
}
</script>

<style lang="scss" scoped>
    main {
        min-height: calc(100vh - 120px);
        max-height: calc( 100% - 120px );
        background-color: lightgray;
    }
</style>