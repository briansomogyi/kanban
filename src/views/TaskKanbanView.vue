<script setup>
import AddNewList from '../components/AddNewList.vue';
import TaskList from '../components/TaskList.vue';
</script>

<template>
    <h1 class="p-3">Kanban Task</h1>
    <TaskList v-for="(list, index) in kanbanStore" />
    <AddNewList />
</template>
