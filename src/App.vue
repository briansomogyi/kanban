<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/tasks-kanban"> Kanban Tasks </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "tailwindcss";
</style>