<script setup>
import { RouterView } from "vue-router"
import NavBar from "./components/NavBar.vue"
</script>

<template>
  <NavBar />

  <div class="mt-25">
    <RouterView />
  </div>

  <footer>Copyright 2025</footer>
</template>

<style>
@import "tailwindcss";
</style>
