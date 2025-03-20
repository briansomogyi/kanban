import { defineStore } from "pinia"

export const useKanban = defineStore("kanban", {
    state: () => {
        return {
            lists: []
        }
    },
    actions: {
        addNewList(columnName) {
            this.lists.push({ name: columnName, tasks: [] })
        },
        addNewTask(taskName, columnId) {
            this.lists[columnId].tasks.push({ name: taskName })
        },
        deleteList(id) {
            this.lists.splice(id, 1);
        }
    }
})
