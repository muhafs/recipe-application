<template>
    <header
        class="relative flex items-center justify-center gap-8 bg-white p-8 shadow"
    >
        <div
            class="absolute left-10 top-1/2 -translate-y-1/2 text-2xl font-bold uppercase"
        >
            Logo
        </div>

        <nav class="flex items-center gap-4">
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'by-name' }">Search Meals</router-link>
            <router-link :to="{ name: 'by-letter' }">By Letter</router-link>
            <router-link :to="{ name: 'by-ingredient' }"
                >By Ingredient</router-link
            >
        </nav>
    </header>
</template>

<script setup>
//
</script>
