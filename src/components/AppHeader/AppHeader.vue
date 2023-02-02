<template>
    <header>
        <div class="container d-flex justify-content-between">
            <h1>Boolfolio Projects</h1>
    
            <nav>
                <ul class="d-flex list-unstyled">
                    <li class="ms-4"><router-link :to="{ name: 'homepage' }">Homepage</router-link></li>
                    <li class="ms-4"><router-link :to="{ name: 'about-us' }">About Us</router-link></li>
                    <li class="ms-4"><router-link :to="{ name: 'contact-us' }">Contact Us</router-link></li>
                </ul>
            </nav>
        </div>
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