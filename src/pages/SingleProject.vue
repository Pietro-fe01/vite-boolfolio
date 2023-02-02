<template>
    <section class="single-project container py-4" v-if="this.project">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="m-0">{{ project.project_title }}</h1>
            <h4 class="m-0 text-decoration-underline">{{ project.customer_name }}</h4>
        </div>
        <h6 class="text-muted mt-3">{{ project.type.name }}</h6>
        <img class="mt-4" :src="project.image_url" alt="">
        <p class="my-4">{{ project.description }}</p>
        <div class="project-technologies mb-4">
            <span v-for="technology in project.technologies" class="badge text-bg-dark me-2 p-2">{{ technology.name }}</span>
        </div>

        <router-link :to="{ name: 'homepage' }" class="btn btn-secondary">Come back</router-link>
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