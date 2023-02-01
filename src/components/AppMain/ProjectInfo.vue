<template>
    <div class="project-card">
        {{ projectData.id }}
        {{ projectData.project_title }}
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
    }
}
</script>

<style lang="scss" scoped>
</style>