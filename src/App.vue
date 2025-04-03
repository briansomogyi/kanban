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

  <pre class="mt-45">
    {{ helloText.name }}
    {{ helloText.age }}
  </pre>

  <div class="mt-25">
    <RouterView />
  </div>

  <footer>Copyright 2025</footer>
</template>

<style>
@import "tailwindcss";
</style>
