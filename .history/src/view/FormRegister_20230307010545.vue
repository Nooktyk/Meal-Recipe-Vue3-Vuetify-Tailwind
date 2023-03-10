<template>
    <div class="w-full h-[91vh] p-16 flex bg-slate-400/[.6]">
        <v-sheet class="w-[500px] p-10">
            <v-form ref="form">
                <v-text-field
                    v-model="name"
                    :counter="10"
                    label="Name"
                ></v-text-field>
                <p>{{ errorMsg.name }}</p>

                <v-checkbox
                    v-model="checkbox"
                    label="Do you agree?"
                ></v-checkbox>
                <p>{{ errorMsg.checkbox }}</p>
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
        errorMsg: {
            name: "",
            checkbox: "",
        },
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
    },
    methods: {
        validateName(value) {
            if (value.length < 10) {
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
    },
};
</script>
