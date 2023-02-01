<template>
    <main>
        <section class="container pt-3 pb-5">
            <h1>Projects' List</h1>
            <div class="cards-container row">
                <div v-for="project in projects" class="col-6 gy-4">
                    <ProjectInfo :projectData = "project" />
                </div>
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
        height: calc( 100% - 120px );
        background-color: lightgray;
    }
</style>