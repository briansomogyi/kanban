import { defineStore } from 'pinia'

export const useKanban = defineStore('kanban', {
    state: () => {
        return {
            lists: [
                {
                    name: "TODO",
                    tasks: [
                        {
                            name: "Tema la TAW", color: "",
                        },
                        {
                            name: "Tema 2", color: "",
                        },
                        {
                            name: "Tema 3", color: "",
                        },
                    ]
                },
                {

                },
                {

                },
            ]
        }
    },
})