<script setup>
import AddNewList from "../components/AddNewList.vue"
import TasksList from "../components/TasksList.vue"

import { useKanban } from "../stores/kanban"
const kanbanStore = useKanban()
</script>

<template>
    <h1 class="p-3">Kanban Tasks</h1>
    <div class="flex flex-row">
        <TasksList v-for="(list, index) in kanbanStore.lists" :key="index" :columnName="list.name" :columnId="index" />
        <AddNewList />
    </div>
</template>
