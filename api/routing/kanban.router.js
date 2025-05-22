import { Router } from "express"
import {
    getKanbanLists,
    addNewList,
    addNewTask,
    deleteList,
    editList
} from "../service/kanban.service.js"

export const kanbanRouter = Router()

kanbanRouter.get("/", async (req, res) => {
    res.send(JSON.stringify(await getKanbanLists()))
})

kanbanRouter.post("/add-new-list", (req, res) => {
    const columnName = req.body.name
    const checkname = new RegExp("^[a-zA-Z0-9 ]*$")
    if (!checkname.test(columnName)) {
        res.status(400).send("Invalid list name")
        return
    }
    addNewList(columnName)
    res.send("ok")
})

kanbanRouter.post("/add-new-task", (req, res) => {
    const { listId, name } = req.body
    const checkname = new RegExp("^[a-zA-Z0-9 ]*$")
    if (!checkname.test(name)) {
        res.status(400).send("Invalid list name")
        return
    }
    addNewTask(listId, name)
    res.send("ok")
})

kanbanRouter.delete("/delete-list", (req, res) => {
    const { id } = req.body
    const checkid = new RegExp("^[0-9]*$")
    if (!checkid.test(id)) {
        res.status(400).send("Invalid list name")
        return
    }
    deleteList(id)
    res.send("ok")
})
kanbanRouter.put("/edit-list", (req, res) => {
    const { id, name } = req.body.data

    const checkname = new RegExp("^[a-zA-Z0-9 ]*$")
    if (!checkname.test(name)) {
        res.status(400).send("Invalid list name")
        return
    }
    editList(id, name)
    res.send("ok")
})