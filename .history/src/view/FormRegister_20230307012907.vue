<template>
    <div class="w-full p-16 flex">
        <!-- <v-sheet class="w-[500px] p-10 border">
            <v-form>
                <v-text-field v-model="name" label="Name"></v-text-field>
                <p class="text-xs text-red-600">{{ errorMsg.name }}</p>

                <v-checkbox
                    v-model="checkbox"
                    label="Do you agree?"
                ></v-checkbox>
                <p class="text-xs text-red-600">{{ errorMsg.checkbox }}</p>
            </v-form>
        </v-sheet> -->

        <v-card class="w-[500px] p-10 border">
            <v-card-title
                class="text-h6 font-weight-regular justify-space-between"
            >
                <span class="mr-3">{{ currentTitle }}</span>
                <v-avatar
                    color="primary"
                    size="24"
                    v-text="`step: ${step}`"
                ></v-avatar>
            </v-card-title>

            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                        <v-text-field
                            v-model="email"
                            label="Email"
                            placeholder="john@google.com"
                        ></v-text-field>
                        <span
                            class="text-caption text-grey-darken-1"
                            v-if="email"
                        >
                            {{ errorMsg.email }}
                        </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                    <v-card-text>
                        <v-text-field
                            label="Password"
                            type="password"
                            v-model="password"
                        ></v-text-field>
                        <v-text-field
                            label="Confirm Password"
                            type="password"
                            v-model="confirmPassword"
                        ></v-text-field>
                        <span class="text-caption text-grey-darken-1">
                            Please enter a password for your account
                        </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                    <div class="pa-4 text-center">
                        <v-img
                            class="mb-4"
                            contain
                            height="128"
                            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                        ></v-img>
                        <h3 class="text-h6 font-weight-light mb-2">
                            Welcome to Vuetify
                        </h3>
                        <span class="text-caption text-grey"
                            >Thanks for signing up!</span
                        >
                    </div>
                </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn v-if="step > 1" variant="text" @click="step--">
                    Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    v-if="step < 3"
                    color="primary"
                    variant="flat"
                    @click="step++"
                    :disabled="errorMsg.email ? true : false"
                >
                    Next
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup></script>

<script>
export default {
    data: () => ({
        name: "",
        email: "",
        checkbox: false,
        errorMsg: {
            name: "",
            checkbox: "",
            email: "",
        },
        password: "",
        confirmPassword: "",
        step: 1,
    }),
    watch: {
        name(value) {
            this.name = value;
            this.validateName(value);
        },
        checkbox(value) {
            this.checkbox = value;
            this.validateCheckbox(value);
        },
        email(value) {
            this.email = value;
            this.validateEmail(value);
        },
    },
    methods: {
        validateName(value) {
            if (value.length < 10 && value.length > 0) {
                this.errorMsg.name = "Name is required more than 10 characters";
            } else {
                this.errorMsg.name = "";
            }
        },
        validateCheckbox(value) {
            if (!value) {
                this.errorMsg.checkbox = "You must agree to continue";
            } else {
                this.errorMsg.checkbox = "";
            }
        },
        validateEmail(value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.errorMsg.email = "";
            } else {
                this.errorMsg.email = "invalid email";
            }
        },
    },
    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return "Sign-up";
                case 2:
                    return "Create a password";
                default:
                    return "Account created";
            }
        },
    },
};
</script>
