<template>
    <div class="card">
        <img v-if="projectData.image_url" :src="projectData.image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ projectData.project_title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ projectData.customer_name }}</h6>
            <p class="card-text">
                {{ cropDescription(projectData.description) }}
            </p>
            <a href="#" class="btn btn-primary">See details</a>
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
            return text.substring(0, 200) + '...';
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        & img {
            height: 250px;
            padding: 5px 5px 0 5px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            object-fit: cover;
        }
    }
</style>