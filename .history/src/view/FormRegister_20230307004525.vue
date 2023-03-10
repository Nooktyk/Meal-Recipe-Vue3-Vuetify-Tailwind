<template>
    <div class="w-full p-16 flex">
        <v-card max-width="344" title="User Registration" theme="dark">
            <v-container>
                <v-text-field
                    v-model="data.first"
                    color="primary"
                    label="First name"
                    variant="underlined"
                ></v-text-field>

                <v-text-field
                    v-model="data.last"
                    color="primary"
                    label="Last name"
                    variant="underlined"
                ></v-text-field>

                <v-text-field
                    v-model="data.email"
                    color="primary"
                    label="Email"
                    variant="underlined"
                ></v-text-field>

                <v-text-field
                    v-model="data.password"
                    color="primary"
                    label="Password"
                    placeholder="Enter your password"
                    variant="underlined"
                ></v-text-field>

                <v-checkbox
                    v-model="data.terms"
                    color="secondary"
                    label="I agree to site terms and conditions"
                ></v-checkbox>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="success">
                    Complete Registration

                    <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    first: "",
    last: "",
    email: "",
    password: "",
    terms: false,
});
</script>
