import { defineStore } from 'pinia'

export const useKanban = defineStore('kanban', {
    state: () => {
        return {
            tasks: []
        }
    },
})