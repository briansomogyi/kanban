<script setup>
const props = defineProps({
    columnId: {
        type: Number,
        default: 0
    }
})

import { ref } from "vue"
const inputMode = ref(false)
function changeMode() {
    inputMode.value = !inputMode.value
    taskName.value = ""
}

import { useKanban } from "../stores/kanban"
const kanbanStore = useKanban()

const taskName = ref("")
function saveTask() {
    kanbanStore.addNewTask(taskName.value, props.columnId)
    changeMode()
}
</script>

<template>
    <button v-if="!inputMode" type="button"
        class="mb-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        @click="changeMode">
        <i class="bi bi-plus-circle-dotted"></i> Add Task
    </button>

    <form v-else class="mx-auto max-w-md" @submit.prevent="saveTask">
        <label for="default-search" class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Add new task
        </label>
        <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <i class="bi bi-layout-sidebar-inset text-gray-500 dark:text-gray-400"></i>
            </div>
            <input v-model="taskName" type="search"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Add new task..." required @keydown.enter="submit" />
            <button type="submit"
                class="absolute end-16.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add
            </button>
            <button
                class="absolute end-2.5 bottom-2.5 rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                @click.prevent="changeMode">
                <i class="bi bi-x-circle"></i>
            </button>
        </div>
    </form>
</template>
