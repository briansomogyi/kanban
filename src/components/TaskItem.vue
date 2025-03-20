<script setup>
defineProps({
    taskName: {
        type: String,
        default: ""
    }
})
</script>
<template>
    <div
        class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ taskName }}
        </h6>
    </div>
</template>