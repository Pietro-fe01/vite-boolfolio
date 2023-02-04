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

        <div class="reviews-container" v-if="project.reviews.length > 0">
            <h2>Reviews:</h2>
            <div class="reviews-section d-flex flex-wrap">
                <div class="card text-center mb-4" v-for="review in project.reviews">
                    <div class="card-header">
                        Reviewed by <span class="text-decoration-underline">{{ review.user_name}}</span>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ review.text_review }}</p>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
        </div>
        <h4 v-else class="mb-3">No reviews have been provided. Let us know your thoughts!</h4>

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

<style lang="scss" scoped>
    .single-project {
        & .reviews-container {
            & .reviews-section .card {
                width: calc(100% / 2 - 12px);
                &:nth-child(odd) {
                    margin-right: 12px;
                }
                &:nth-child(even) {
                    margin-left: 12px;
                }
            }
        }  
    }
</style>