<script setup>
import AddNewList from "../components/AddNewList.vue"
import TasksList from "../components/TasksList.vue"

import { useKanban } from "../stores/kanban"
const kanbanStore = useKanban()

import { onMounted } from "vue"
onMounted(() => {
    kanbanStore.fetchKanbanLists()
})
</script>

<template>
    <h1 class="p-3">Kanban Tasks</h1>
    <div class="flex">
        <TasksList v-for="(list, index) in kanbanStore.lists" :key="index" :columnName="list.name" :columnId="index" />
        <AddNewList />
    </div>
</template>
