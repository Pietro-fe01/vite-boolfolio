<template>
    <section class="container pt-3 pb-5 homepage">
        <select v-model="type" name="type" id="" class="form-select" @change="getTypeProjects()" >
            <option value="default" selected>All types <span v-once>({{ projects.length }})</span></option>
            <option v-for="_type in typeSelection" :value="_type.id">{{ _type.name }}</option>
        </select>
    
        <div v-if="projects.length > 0" class="cards-container row">
            <div v-for="project in getProjects" class="col-6 gy-4">
                <ProjectInfo :projectData = "project" />
            </div>

            <!-- <button id="btn-load" class="btn btn-dark mt-4 mx-auto" @click="totProjects += 4" v-if="totProjects < projects.length">LOAD MORE</button> -->
            
            <button id="btn-load" class="btn btn-dark mx-auto mt-4" type="button" @click="totProjects += 4" v-if="totProjects < projects.length">
                <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                <span id="spinner-text">LOAD MORE</span>
            </button>
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
            totProjects: 4,
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
                })
            }
        },
        getTypeName() {
            if(!isNaN(this.type)){
                return this.typeSelection[this.type - 1].name;
            }
        }
    },
    computed: {
        getProjects() {
            return this.projects.filter((elm, index) => index < this.totProjects);
        },
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
        & #btn-load{
            width: 200px;
            position: relative;
            & #spinner-text {
                transition: margin 0.3s;
            }
            &:hover #spinner-text {
                margin-left: 28px;
            }
            &:hover .spinner-border {
                opacity: 1;
                left: 23%;
            }
            & .spinner-border {
                transition: all 0.3s;
                position: absolute;
                top: 27%;
                left: 10%;
                opacity: 0;
            }
        }
    }
</style>