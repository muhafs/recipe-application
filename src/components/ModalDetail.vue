<template>
    <div class="flex max-w-7xl gap-4 rounded-lg bg-white p-4">
        <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="h-full w-1/2 rounded-lg object-cover"
        />

        <main
            class="max-h-[624px] w-1/2 overflow-y-auto pr-4 overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-600"
        >
            <h3 class="mb-4 text-center text-4xl font-bold">
                {{ meal.strMeal }}
            </h3>

            <div
                class="mb-4 flex items-center justify-between px-4 text-xl font-semibold"
            >
                <p>Category: {{ meal.strCategory }}</p>

                <p>Area: {{ meal.strArea }}</p>
            </div>

            <div class="mb-4 grid grid-cols-3 gap-4">
                <div>
                    <h2 class="text-2xl font-bold">Ingredients:</h2>
                    <ul>
                        <template v-for="i in 20">
                            <li v-if="meal[`strIngredient${i}`]">
                                {{ i }}.
                                {{ meal[`strIngredient${i}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

                <div class="col-span-2">
                    <h2 class="text-2xl font-bold">Measures:</h2>
                    <ul>
                        <template v-for="i in 20">
                            <li v-if="meal[`strMeasure${i}`]">
                                {{ meal[`strMeasure${i}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>

            <div class="mb-4">
                <h2 class="text-2xl font-bold">Instruction:</h2>
                <p v-html="instruction"></p>
            </div>

            <div class="mb-4 flex items-center justify-between">
                <a
                    :href="meal.strYoutube"
                    class="rounded bg-red-600 px-4 py-2 text-white"
                >
                    YouTube
                </a>
                <a
                    :href="meal.strSource"
                    class="rounded bg-sky-600 px-4 py-2 text-white"
                >
                    View Source
                </a>
            </div>
        </main>
    </div>
</template>

<script setup>
import { computed } from "vue";

const { meal } = defineProps({ meal: { type: Object, required: true } });

const instruction = computed(() => {
    return meal.strInstructions.replaceAll("\r\n\r\n", "<br />");
});
</script>
