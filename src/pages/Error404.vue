<template>
    <section class="error-404 container d-flex justify-content-center align-items-center">
        <h4 class="m-0">Error 404 | Page not found</h4>
    </section>
</template>

<script>
export default {
    name: 'Error404',
}
</script>

<style lang="scss" scoped>
    section {
        height: calc(100vh - 120px);
        & h4 {
            border: 3px solid black;
            padding: 10px 15px;
            border-radius: 10px;
        }
    }
</style>