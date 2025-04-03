<script setup>
import { RouterView } from "vue-router"
import NavBar from "./components/NavBar.vue"

import { ref } from "vue";
const helloText = ref("")
function onHelloText(response) {
  helloText.value = response
}
</script>

<template>
  <NavBar @onHelloText="onHelloText" />

  <h1 class="mt-35 text-2xl">
    {{ helloText.message }}
  </h1>

  <div class="mt-25">
    <RouterView />
  </div>

  <footer>Copyright 2025</footer>
</template>

<style>
@import "tailwindcss";
</style>
