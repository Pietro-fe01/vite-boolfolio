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
        height: calc( 100% - 120px );
        background-color: lightgray;
    }
</style>