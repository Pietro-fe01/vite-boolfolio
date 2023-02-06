<template>
    <section class="container pt-3 pb-5 homepage">
        <select v-model="type" name="type" id="" class="form-select" @change="getTypeProjects()" >
            <option value="default" selected>All types</option>
            <option v-for="_type in typeSelection" :value="_type.id">{{ _type.name }}</option>
        </select>
    
        <div v-if="projects.length > 0" class="cards-container row">
            <div v-for="project in projects" class="col-6 gy-4">
                <ProjectInfo :projectData = "project" />
            </div>
        </div>
        <h4 v-else class="no-projects-found text-center">Nessun progetto di tipo '{{ getTypeName() }}' trovato.</h4>
    </section>
</template>

<script>
import { store } from '../store';
import ProjectInfo from '../components/AppMain/ProjectInfo.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    components: {
        ProjectInfo
    },
    data() {
        return {
            store,
            projects: [],
            typeSelection: null,
            type: 'default',
        }
    },
    methods: {
        getTypeProjects() {
            if ( this.type === 'default' ) {
                axios.get(`${this.store.backendUrl}/projects`)
                .then( (res) => {
                    this.projects = res.data;
                });
            } else {
                axios.get(`${this.store.backendUrl}/projects/${this.type}`)
                .then( (res) => {
                    this.projects = res.data;
                });
            }
        },
        getTypeName() {
            if(!isNaN(this.type)){
                return this.typeSelection[this.type - 1].name;
            }
        }
    },
    created() {
        // Get all projects
        axios.get(`${this.store.backendUrl}/projects`)
        .then( (res) => {
            this.projects = res.data;
        });

        // Get all project types
        axios.get(`${this.store.backendUrl}/types`)
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
        & .no-projects-found {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 2.5px solid black;
            padding: 5px 15px;
            border-radius: 10px;
        }
    }
</style>