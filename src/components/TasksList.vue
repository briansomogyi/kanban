<script setup>
import AddNewTask from './AddNewTask.vue';
import TaskItem from './TaskItem.vue';

const props = defineProps({
    columnName: {
        type: String,
        default: ""
    },
    columnId: {
        type: Number,
        default: 0
    }
})

import { useKanban } from '../stores/kanban';
const kanbanStore = useKanban()

function deleteList() {
    kanbanStore.deleteList(props.columnId)
}
</script>

<template>
    <div class="ms-2">
        <div
            class="m-2 mt-2 flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ columnName }}
            </h6>
            <button
                class="ms-4 text-white end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                @click="deleteList">
                <i class="bi bi-x-circle"></i>
            </button>
        </div>
        <div class="mt-3 flex flex-col">
            <div v-for="(task, index) in kanbanStore.lists[columnId].tasks" :key="index">
                <TaskItem :taskName="task.name"></TaskItem>
            </div>
            <AddNewTask :columnId="columnId"></AddNewTask>
        </div>
    </div>
</template>
