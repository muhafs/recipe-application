<template>
    <div class="min-w-screen bg-gray-100">
        <NavBar />

        <RouterView />
    </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
