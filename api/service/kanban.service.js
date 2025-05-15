import { List } from "../db.js"

export const lists = []

export const addNewList = columnName => {
    List.create({ name: columnName })
    lists.push({ name: columnName, tasks: [] })
}

export const addNewTask = (listId, taskName) => {
    lists[listId].tasks.push({ name: taskName })
}

export const deleteList = id => {
    List.destroy({
        where: {
            id: id
        }
    })
    lists.splice(id, 1)
}
export const editList = (id, name) => {
    lists[id].name = name
}

export const getKanbanLists = () => {
    return lists
}