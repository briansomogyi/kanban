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
        class="mb-1 flex max-w-sm rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h6 class="text-xl tracking-tight text-gray-900 dark:text-white">
            {{ taskName }}
        </h6>
    </div>
</template>
