<template>
    <main>
        <section class="container">
            <h1>Projects' List</h1>
            <div v-for="project in projects">
                <ProjectInfo :projectData = "project" />
            </div>
        </section>
    </main>
</template>

<script>
import ProjectInfo from './ProjectInfo.vue';
import axios from 'axios';

export default {
    name : 'AppMain',
    components: {
        ProjectInfo
    },
    data() {
        return {
            projects: [],
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/projects')
        .then( (res) => {
            this.projects = res.data;
        } )
    }
}
</script>

<style lang="scss" scoped>
    main {
        height: calc( 100vh - 120px );
        background-color: lightgray;
    }
</style>