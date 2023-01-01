<template>
    <div class="mx-auto flex w-6/12 items-center justify-center p-8">
        <input
            type="text"
            placeholder="Search a meal..."
            class="w-full rounded border-2 border-gray-200"
        />
    </div>
    <div class="flex justify-center gap-4">
        <router-link
            v-for="letter in letters"
            :key="letter"
            :to="{ name: 'by-letter', params: { letter } }"
            >{{ letter }}</router-link
        >
    </div>

    <section>
        <pre>{{ meals }}</pre>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Api from "@/apis/BaseAPI";

const meals = ref([]);

onMounted(async () => {
    const response = await Api.get("search.php?s=Arrabiata");

    meals.value.push(response.data);
});

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
</script>
