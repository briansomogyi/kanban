import { defineStore } from "pinia"

import axios from "axios"

export const useKanban = defineStore("kanban", {
    state: () => {
        return {
            lists: []
        }
    },
    actions: {
        fetchKanbanLists() {
            axios.get("http://localhost:3000/kanban").then(response => {
                this.lists = response.data
            })
        },
        addNewList(columnName) {
            this.lists.push({ name: columnName, tasks: [] })
        },
        deleteList(id) {
            this.lists.splice(id, 1)
        },
        addNewTask(taskName, columnId) {
            this.lists[columnId].tasks.push({ name: taskName })
        }
    }
})
