<script setup>
import { ref } from "vue"
const inputMode = ref(false)
function changeMode() {
    inputMode.value = !inputMode.value
    columnName.value = ""
}

import { useKanban } from "../stores/kanban"
const kanbanStore = useKanban()

const columnName = ref("")
function saveColumn() {
    kanbanStore.addNewList(columnName.value)
    changeMode()
}
</script>

<template>
    <button v-if="!inputMode" type="button"
        class="ms-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        @click="changeMode">
        <i class="bi bi-plus-circle-dotted"></i> Add Column
    </button>

    <form v-else class="ms-2 max-w-md mx-auto" @submit.prevent="saveColumn">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Add new column
        </label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <i class="bi bi-layout-sidebar-inset text-gray-500 dark:text-gray-400"></i>
            </div>
            <input v-model="columnName" type="search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add new column..." required @keydown.enter="submit" />
            <button type="submit"
                class="text-white absolute end-16.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add
            </button>
            <button
                class="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                @click.prevent="changeMode">
                <i class="bi bi-x-circle"></i>
            </button>
        </div>
    </form>
</template>
