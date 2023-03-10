<template>
    <div class="w-full h-[91vh] p-16 flex bg-slate-400/[.6]">
        <v-sheet class="w-[500px] p-10">
            <v-form ref="form">
                <v-text-field
                    v-model="name"
                    :counter="10"
                    label="Name"
                    required
                ></v-text-field>

                <v-checkbox
                    v-model="checkbox"
                    :rules="[(v) => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                ></v-checkbox>

                <p>{{ errorMsg }}</p>
            </v-form>
        </v-sheet>
    </div>
</template>

<script setup></script>

<script>
export default {
    data: () => ({
        valid: true,
        name: "",
        checkbox: false,
        errorMsg: "",
    }),
    watch: {
        name(value) {
            this.name = value;
            this.validateName(value);
        },
    },
    methods: {
        validateName(value) {
            if (value.length < 10) {
                this.errorMsg = "Name is required more than 10 characters";
            }
        },
    },
};
</script>
