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

    <section>
        <div class="toast-container position-fixed">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src="data:image/png;base64,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" class="rounded" alt="boolean_logo">
                    <strong class="me-auto">Bootstrap</strong>
                    <small>Now</small>
                    <button type="button" id="btn-close-toast" class="btn-close" data-bs-dismiss="toast" aria-label="Close" @click="showHideToast('hide')"></button>
                </div>
                <div class="toast-body">
                    The form has been filled in successfully. We will contact you as soon as possible!
                </div>
            </div>
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
                this.showHideToast('show');
                this.resetValuesForm();
            })
        },
        resetValuesForm() {
            return [
                this.formValues.name = '',
                this.formValues.email = '',
                this.formValues.message = ''
            ];
        },
        showHideToast(action) {
            const toast = document.getElementById('liveToast');
            if(action === 'show') {
                return toast.classList.add('show');
            } else {
                return toast.classList.remove('show');
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.toast-container {
    right: 10px;
    bottom: 70px;
    & img {
        width: 40px;
    }
}
</style>