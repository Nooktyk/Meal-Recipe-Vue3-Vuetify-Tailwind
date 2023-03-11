<template>
    <v-parallax
        src="https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg"
        height="630"
    >
        <div class="flex gap-10 p-10">
            <div class="flex-1">
                <v-card width="400" theme="dark">
                    <v-img
                        height="300"
                        :src="meal.strMealThumb"
                        :alt="meal.strMeal"
                        cover
                    ></v-img>

                    <v-card-item>
                        <v-card-title>{{ meal.strMeal }}</v-card-title>

                        <v-card-subtitle>
                            <span class="me-1">{{ meal.strMeal }}</span>

                            <v-icon
                                color="error"
                                icon="mdi-fire-circle"
                                size="small"
                            ></v-icon>
                        </v-card-subtitle>
                    </v-card-item>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating
                                v-model="rating"
                                color="amber"
                                density="compact"
                                half-increments
                                readonly
                                size="small"
                            ></v-rating>

                            <div class="text-grey ms-4">
                                {{ rating }} ({{ reviews }})
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            • {{ meal.idMeal }}
                        </div>

                        <div class="flex gap-2">
                            <v-chip>
                                <v-icon
                                    start
                                    icon="mdi-palette-swatch-variant"
                                ></v-icon>
                                {{ meal.strCategory }}
                            </v-chip>
                            <v-chip>
                                <v-icon start icon="mdi-earth"></v-icon>
                                {{ meal.strArea }}
                            </v-chip>
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-actions>
                        <v-btn color="orange"
                            ><v-icon start>mdi-share-variant</v-icon>
                            Share
                        </v-btn>

                        <v-btn color="orange"
                            ><v-icon start>mdi-magnify-expand</v-icon>
                            Explore
                        </v-btn>

                        <v-spacer></v-spacer>
                        <v-btn @click="onRandomMeal" icon="mdi-recycle">
                            <v-icon icon="mdi-recycle"></v-icon
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </div>

            <div class="flex-2 bg-black/[.2] p-10 rounded-lg">
                <div class="flex flex-col gap-5">
                    <div
                        class="text-2xl font-bold text-white flex items-center gap-1"
                    >
                        <v-icon icon="mdi-ladybug"></v-icon>
                        {{ meal.strMeal }}
                    </div>
                    <div class="bg-black/[.5] text-white p-5 rounded-lg">
                        {{ meal.strInstructions?.slice(0, 1700) }}
                    </div>
                </div>
            </div>
        </div>
    </v-parallax>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";

const meal = ref({});
const rating = ref(0);
const reviews = ref(0);

watch(meal, () => {
    return (
        (rating.value = Math.floor(Math.random() * (5 - 1 + 1) + 1)),
        (reviews.value = Math.floor(Math.random() * (1000 - 1 + 1) + 1))
    );
});

onMounted(async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];
});

const onRandomMeal = async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];
};

// setInterval(onRandomMeal, 4000);
</script>
