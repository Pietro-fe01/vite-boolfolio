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
                        Reviewed by <span class="text-decoration-underline">{{ review.user_name === null ? 'Anonymus' : review.user_name }}</span>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ review.text_review }}</p>
                    </div>
                    <div class="card-footer text-muted">
                        {{ review.review_created }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h4 class="my-5">No reviews have been released yet.</h4>
        </div>

        <div class="mb-4 reviews-form">
            <h2>Let me know your thoughts!</h2>
            <form action="" @submit.prevent="sendReviewForm()">
                <div class="form-floating mb-3">
                    <input type="text" placeholder="Your name" class="form-control" id="user_name" v-model="userName">
                    <label for="user_name" class="form-label">Your name</label>
                </div>
    
                <div class="form-floating mb-3">
                    <textarea name="" cols="30" rows="10" placeholder="Text review" class="form-control" :class="this.formInvalid ? 'is-invalid' : ''" id="text_review" v-model="textReview"></textarea>
                    <label for="text_review" class="form-label">Text review*</label>
                    <div v-if="formInvalid" class="alert alert-danger">
                        Attention, mandatory field !
                    </div>
                </div>

                <button type="submit" class="btn btn-primary me-2" :disabled="this.waiting">
                    <div v-if="waiting">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </div>
                    <div v-else>
                        SEND
                    </div>
                </button>

                <button type="reset" class="btn btn-warning" @click="resetValuesForm()">Reset</button>
            </form>
        </div>
        <router-link :to="{ name: 'homepage' }" class="btn btn-secondary">Come back</router-link>
    </section>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null,
            userName: '',
            textReview: '',
            formInvalid: false,
            waiting: false,
            reviewSuccess: true,
        }
    },
    methods: {
        sendReviewForm() {
            if (this.textReview == '' ) {
                this.formInvalid = true;
            } else {
                this.formInvalid = false; // To display form errors

                this.waiting = true; // To display a loader before axios' answer

                axios.post(`${this.store.backendUrl}/reviews/${this.project.id}`, {
                    user_name: this.userName, 
                    text_review: this.textReview 
                })
                .then( (res) => {
                    this.project.reviews.push(res.data);
                    this.resetValuesForm(); // Clear input fields

                    this.waiting = false; // Clear loader after axios' answer

                    this.reviewSuccess = true;
                })      
            }
        },
        resetValuesForm() {
            return [
                this.userName = '',
                this.textReview = ''
            ];
        }
    },
    created() {
        axios.get(`${this.store.backendUrl}/project/${this.$route.params.slug}`)
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