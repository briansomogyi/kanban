<template>
    <h1>Home Page</h1>

    <pre>
    {{ messages }}
  </pre>
</template>

<script setup>
import { onMounted, ref } from "vue"

onMounted(() => { })

const messages = ref("")
</script>