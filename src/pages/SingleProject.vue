<template>
    <section class="single-project container">
        <h1 class="m-0">{{ project }}</h1>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            project: null
        }
    },
    created() {
        axios.get(`http://127.0.0.1:8000/api/project/${this.$route.params.slug}`)
        .then( (res) => {
            this.project = res.data;
        })
        .catch( (err) => {
            if ( err.response.status === 404 ) {
                this.$router.push({ name: 'page-not-found' })
            }
        });
    }
}
</script>

<style lang="scss" scoped></style>