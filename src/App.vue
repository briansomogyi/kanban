<script setup>
import { RouterView } from "vue-router"
import NavbarComponent from "./components/NavbarComponent.vue";
</script>

<template>
  <NavbarComponent />

  <div class="mt-25">
    <RouterView />
  </div>

  <footer>
    Copyright 2025
  </footer>
</template>

<style>
@import "tailwindcss";
</style>