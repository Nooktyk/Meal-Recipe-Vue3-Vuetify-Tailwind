<template>
    <div class="w-full p-16 flex">
        <v-sheet class="w-[500px] p-10 border">
            <v-form>
                <v-text-field v-model="name" label="Name"></v-text-field>
                <p class="text-xs text-red-600">{{ errorMsg.name }}</p>

                <v-checkbox
                    v-model="checkbox"
                    label="Do you agree?"
                ></v-checkbox>
                <p class="text-xs text-red-600">{{ errorMsg.checkbox }}</p>
            </v-form>
        </v-sheet>
    </div>
</template>

<script setup></script>

<script>
export default {
    data: () => ({
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
    },
};
</script>
