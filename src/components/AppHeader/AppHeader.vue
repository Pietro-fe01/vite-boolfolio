<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <h1 class="m-0">Boolfolio Projects</h1>

            <nav>
                <ul class="d-flex list-unstyled">
                    <li class="ms-4"><router-link :to="{ name: 'homepage' }" class="text-white text-decoration-none">Homepage</router-link></li>
                    <li class="ms-4"><router-link :to="{ name: 'about-us' }" class="text-white text-decoration-none">About Us</router-link></li>
                    <li class="ms-4"><router-link :to="{ name: 'contact-us' }" class="text-white text-decoration-none">Contact Us</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
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
        & * {
            height: 100%;
        }
    }
</style>