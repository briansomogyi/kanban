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

            axios.post(
                "http://localhost:3000/kanban/add-new-list",
                { name: columnName },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
        },
        deleteList(id) {
            this.lists.splice(id, 1)

            axios.delete("http://localhost:3000/kanban/delete-list", {
                headers: {
                    "Content-Type": "application/json"
                },
                data: { id }
            })
        },
        addNewTask(taskName, columnId) {
            this.lists[columnId].tasks.push({ name: taskName })

            axios.post(
                "http://localhost:3000/kanban/add-new-task",
                { columnId, name: taskName },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
        }
    }
})
