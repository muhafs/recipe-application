<template>
    <div class="mx-auto flex w-6/12 items-center justify-center p-8">
        <input
            type="text"
            placeholder="Search a meal..."
            class="w-full rounded border-2 border-gray-200"
            v-model="keyword"
            @change="searchMeal"
        />
    </div>

    <div class="grid grid-cols-4 gap-4 px-8 pb-8">
        <div
            v-for="meal in meals"
            :key="meal.idMeal"
            class="overflow-hidden rounded-lg bg-white shadow-lg"
        >
            <img
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                class="h-92 w-full object-cover"
            />

            <div class="p-4">
                <h3 class="mb-4">{{ meal.strMeal }}</h3>

                <div class="flex items-center justify-between">
                    <a
                        :href="meal.strYoutube"
                        target="_blank"
                        class="rounded bg-red-600 px-4 py-2 text-white shadow"
                    >
                        YouTube
                    </a>

                    <button
                        class="rounded bg-sky-600 px-4 py-2 text-white shadow"
                        type="button"
                        @click="openModal(meal.idMeal)"
                    >
                        More Detail
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div
        v-if="isModalOpen"
        @click.self="isModalOpen = false"
        class="fixed inset-0 grid min-h-screen w-full place-items-center bg-black/20"
    >
        <div class="rounded-lg bg-white p-4">
            <header class="">{{ mealDetails.strMeal }}</header>
            <main class="">
                <img :src="mealDetails.strMealThumb" alt="" />

                <div class="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum provident adipisci necessitatibus nulla vero.
                    Dolorum praesentium libero optio voluptates? A.
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useMealStore } from "@/stores/meal";
import { useRoute } from "vue-router";
import Api from "@/apis/BaseAPI";

const mealStore = useMealStore();
const route = useRoute();

const meals = computed(() => mealStore.searchedMeals);

const keyword = ref("");
const isModalOpen = ref(false);
const mealDetails = ref([]);

const searchMeal = () => {
    keyword.value ?? null;
    mealStore.searchMeals(keyword.value);
};

const openModal = async (id) => {
    const response = await Api.get(`lookup.php?i=${id}`);
    mealDetails.value = response.data.meals[0];

    isModalOpen.value = true;
};

onMounted(() => {
    keyword.value = route.params.name;

    if (keyword.value) searchMeal();
});
</script>
