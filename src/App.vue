<template>
    <div class="min-h-screen bg-gray-100">
        <TheHeader />

        <RouterView />
    </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>
