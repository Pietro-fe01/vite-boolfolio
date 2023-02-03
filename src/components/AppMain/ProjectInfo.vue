<template>
    <div class="card">
        <img v-if="projectData.image_url" :src="projectData.image_url" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column align-items-start">
            <h5 class="card-title">Title: {{ projectData.project_title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Customer: {{ projectData.customer_name }}</h6>
            <h6 class="project-type">{{ projectData.type.name }}</h6>
            <p class="card-text">
                {{ cropDescription(projectData.description) }}
            </p>
            <div class="project-technologies">
                <span v-for="technology in projectData.technologies" class="badge text-bg-dark me-2 mb-3 p-2">{{ technology.name }}</span>
            </div>
            <router-link class="btn btn-primary mt-auto" :to="{ name: 'single-project', params: { slug: projectData.slug } }">
                See details
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectInfo',
    props: {
        projectData: Object,
    },
    data() {
        return {
        }
    },
    methods: {
        cropDescription(text) {
            if ( text.length > 230 ) {
                return text.substring(0, 230) + '...';
            } else {
                return text;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        height: 100%;
        & img {
            height: 250px;
            padding: 5px 5px 0 5px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            object-fit: cover;
        }
        & .card-body {
            & .project-type {
                background-color: rgba($color: #000000, $alpha: 0.5);
                border-radius: 10px;
                display: inline-block;
                color: white;
                padding: 7px 15px;
                position: absolute;
                top: 16px;
                right: 16px;
            }
        }
    }
</style>