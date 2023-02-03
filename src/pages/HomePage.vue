<template>
    <section class="container pt-3 pb-5 homepage">
        <select v-model="type" name="type" id="" class="form-select" @change="getTypeProjects()" >
            <option value="default" selected>All types</option>
            <option v-for="_type in typeSelection" :value="_type.id">{{ _type.name }}</option>
        </select>

        <div v-if="this.projects" class="cards-container row">
            <div v-for="project in projects" class="col-6 gy-4">
                <ProjectInfo :projectData = "project" />
            </div>
        </div>
        <div v-else>Nessun risultato</div>
    </section>
</template>

<script>
import ProjectInfo from '../components/AppMain/ProjectInfo.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    components: {
        ProjectInfo
    },
    data() {
        return {
            projects: [],
            typeSelection: null,
            type: 'default',
        }
    },
    methods: {
        getTypeProjects() {
            if ( this.type === 'default' ) {
                axios.get('http://127.0.0.1:8000/api/projects')
                .then( (res) => {
                    this.projects = res.data;
                });
            } else {
                axios.get(`http://127.0.0.1:8000/api/projects/${this.type}`)
                .then( (res) => {
                    this.projects = res.data;
                });
            }
        }
    },
    created() {
        // Get all projects
        axios.get('http://127.0.0.1:8000/api/projects')
        .then( (res) => {
            this.projects = res.data;
        });

        // Get all project types
        axios.get('http://127.0.0.1:8000/api/types')
        .then( (res) => {
            this.typeSelection = res.data;
        });
    }
}
</script>

<style lang="scss" scoped>
    .homepage {
        & select {
            border-radius: 10px;
            text-align: center;
        }
    }
</style>