<template>
    <div class="card">
        <img src="" class="card-img-top" alt="...">
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
</style>