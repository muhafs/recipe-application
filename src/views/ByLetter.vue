<template>
    <pre>{{ route.params.letter }}</pre>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
