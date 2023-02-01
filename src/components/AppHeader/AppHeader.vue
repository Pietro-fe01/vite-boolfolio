<template>
    <header>
        <h1>Projects' List</h1>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
    header {
        background-color: black;
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: white;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
    }
</style>