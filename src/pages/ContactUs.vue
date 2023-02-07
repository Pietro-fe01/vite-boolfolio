<template>
    <section class="contact-us container">
        <h1 class="pt-3 mb-3 text-center">Contact Us!</h1>

        <div class="w-50 m-auto">
            <form action="" @submit.prevent="validation()">
                <div class="form-floating mb-3">
                    <input type="text" placeholder="Name" class="form-control" :class="formInvalid.name ? 'is-invalid' : ''" id="name" v-model="formValues.name">
                    <label for="name" class="form-label">Your name*</label>
                    <div v-if="formInvalid.name" class="alert alert-danger">
                        Attention, Name field is required !
                    </div>
                </div>

                <div class="form-floating mb-3">
                    <input type="email" placeholder="mail@example.com" class="form-control" :class="formInvalid.email ? 'is-invalid' : ''" id="email" v-model="formValues.email">
                    <label for="email" class="form-label">Your email*</label>
                    <div v-if="formInvalid.email" class="alert alert-danger">
                        Attention, Email field is required !
                    </div>
                </div>
    
                <div class="form-floating mb-3">
                    <textarea cols="30" rows="10" placeholder="Message..." class="form-control" :class="formInvalid.message ? 'is-invalid' : ''"  id="message" v-model="formValues.message"></textarea>
                    <label for="message" class="form-label">Message*</label>
                    <div v-if="formInvalid.message" class="alert alert-danger">
                        Attention, Message field is required !
                    </div>
                </div>

                <button type="submit" class="btn btn-primary me-2" :disabled="waiting">
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
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name : 'ContactUs',
    data() {
        return {
            store,
            waiting: false,
            formValues: {
                name: '',
                email: '',  
                message: ''
            },
            formInvalid: {
                name: false,
                email: false,
                message: false,
            }
        }
    },
    methods: {
        validation() {
            if(this.formValues.name == '') {
                this.formInvalid.name = true;
            } else {
                this.formInvalid.name = false;
            }

            if(this.formValues.email == '') {
                this.formInvalid.email = true;
            } else {
                this.formInvalid.email = false;
            }

            if(this.formValues.message == '') {
                this.formInvalid.message = true;
            } else {
                this.formInvalid.message = false;
            }

            if(this.formValues.name && this.formValues.email && this.formValues.message) {
                return this.sendEmail();
            }
        },
        sendEmail() {
            this.waiting = true;
            axios.post(`${this.store.backendUrl}/contact-form`, {
                name: this.formValues.name,
                email: this.formValues.email,
                message: this.formValues.message
            }).then( (res) => {
                this.waiting = false;
                this.resetValuesForm();
            })
        },
        resetValuesForm() {
            return [
                this.formValues.name = '',
                this.formValues.email = '',
                this.formValues.message = ''
            ];
        }
    }
}
</script>

<style lang="scss" scoped></style>