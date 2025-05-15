import { defineStore } from "pinia"

import axios from "axios"

export const useKanban = defineStore("kanban", {
    state: () => {
        return {
            lists: []
        }
    },
    actions: {
        fetchKanbanlists() {
            axios.get("http://localhost:3000/kanban").then(response => {
                this.lists = response.data
            })
        },
        addNewColumn(columnName) {
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
        addNewTask(taskName, listId) {
            this.lists[listId].tasks.push({ name: taskName })

            axios.post(
                "http://localhost:3000/kanban/add-new-task",
                { listId, name: taskName },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
        },
        editList(columnId, columnName) {
            console.log(columnId, columnName)
            this.lists[columnId].name = columnName

            axios.put("http://localhost:3000/kanban/edit-list", {
                headers: {
                    "Content-Type": "application/json"
                },
                data: { id: columnId, name: columnName }
            })
        }
    }
})
