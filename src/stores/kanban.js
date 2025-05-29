import { defineStore } from "pinia"

import axios from "axios"

import { ws } from "../ws"

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
        async addNewList(columnName) {
            const listResponse = await axios.post(
                "http://localhost:3000/kanban/add-new-list",
                { name: columnName },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            const listId = listResponse.data.id
            this.lists.push({ id: listId, name: columnName, tasks: [] })

            ws.send(JSON.stringify(this.lists))
        },
        async deleteList(id) {
            const responseDeleted = await axios.delete("http://localhost:3000/kanban/delete-list", {
                headers: {
                    "Content-Type": "application/json"
                },
                data: { id }
            })

            if (responseDeleted.data.ok) {
                const listToBeDeleted = this.lists.findIndex(list => list.id === id)
                this.lists.splice(listToBeDeleted, 1)
            }
        },
        addNewTask(taskName, columnId) {
            const taskList = this.lists.find(list => list.id === columnId)
            taskList.tasks.push({ name: taskName })

            axios.post(
                "http://localhost:3000/kanban/add-new-task",
                { columnId, name: taskName },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            ws.send(JSON.stringify(this.lists))
        }
    }
})
