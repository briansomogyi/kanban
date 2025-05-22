import { List, Task } from "../db.js"

export const lists = []

export const addNewList = columnName => {
    List.create({ name: columnName })
    // lists.push({ name: columnName, tasks: [] })
}

export const addNewTask = (listId, taskName) => {
    Task.create({ name: taskName, ListId: listId })
    // lists[listId].tasks.push({ name: taskName })
}

export const deleteList = id => {
    List.destroy({
        where: {
            id: id
        }
    })
    // lists.splice(id, 1)
}
export const editList = (id, name) => {
    lists[id].name = name
}

export const getKanbanLists = async () => {
    const dblists = await List.findAll({
        attributes: ["id", "name"],
        include: [{
            model: Task,
            attributes: ["id", "name", "color"]
        }]
    })

    const lists = []
    dblists.forEach(list => {
        const tasks = []

        list.dataValues?.Tasks.forEach(task => {
            tasks.push(task.dataValues)
        })

        lists.push({ id: list.dataValues.id, name: list.dataValues.name, tasks: tasks })
    })

    console.log(lists)
    return lists
}