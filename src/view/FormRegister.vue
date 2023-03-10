<template>
    <div class="w-full p-16 flex">
        <v-card class="w-[500px] p-10 border">
            <v-card-title class="text-h6">
                <span class="mr-3">{{ currentTitle }}</span>
                <v-avatar color="primary" size="24" v-text="step"></v-avatar>
            </v-card-title>

            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                        <v-text-field
                            v-model="email"
                            label="Email"
                            placeholder="john@google.com"
                        ></v-text-field>
                        <div class="text-xs text-red" v-if="email">
                            {{ errorMsg.email }}
                        </div>
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
                        <div class="text-xs text-red" v-if="email">
                            {{ errorMsg.password }}
                        </div>
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
                <v-btn
                    v-if="step > 1 && step !== 3"
                    variant="text"
                    @click="step--"
                >
                    Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    v-if="step < 2"
                    color="primary"
                    variant="flat"
                    @click="step++"
                    :disabled="errorMsg.email || !email ? true : false"
                >
                    Next
                </v-btn>
                <v-btn
                    v-if="step === 2"
                    color="primary"
                    variant="flat"
                    @click="snackbar = true"
                >
                    Next
                </v-btn>

                <v-snackbar v-model="snackbar" :timeout="timeout">
                    {{ text }}
                    <template v-slot:actions>
                        <v-btn
                            color="blue"
                            variant="text"
                            @click="snackbar = false"
                        >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
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
        errorMsg: {
            name: "",
            email: "",
            password: "",
        },
        password: "",
        confirmPassword: "",
        step: 1,
        snackbar: false,
        text: "Register successfully.",
        timeout: 5000,
    }),
    watch: {
        name(value) {
            this.name = value;
            this.validateName(value);
        },
        email(value) {
            this.email = value;
            this.validateEmail(value);
        },
        confirmPassword(value) {
            this.confirmPassword = value;
            this.validateConfirmPassword(value);
        },
        snackbar(value) {
            this.snackbar = value;
            this.validateSnackbar(value);
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
        validateEmail(value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.errorMsg.email = "";
            } else {
                this.errorMsg.email = "invalid email";
            }
        },
        validateConfirmPassword(value) {
            if (value === this.password) {
                this.errorMsg.password = "";
            } else {
                this.errorMsg.password = "invalid password";
            }
        },
        validateSnackbar(value) {
            if (value) {
                this.step = 3;
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
