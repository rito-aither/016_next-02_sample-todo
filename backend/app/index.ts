import express, { Application, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app: Application = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

try {
    app.listen(PORT, () => {
        console.log(`dev server running at: http://localhost:${PORT}/`)
    })
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message)
    }
}

app.get('/', async (_req: Request, res: Response) => {
    const allTodo = await prisma.todo.findMany()
    console.log(allTodo)

    // return JSON.stringify(allTodo)
    return res.status(200).send({
        message: `Hello Express`,
    })
})
// ToDoアイテム一覧取得

app.get('/api/todos', async (_req: Request, res: Response) => {
    const allTodo = await prisma.todo.findMany()
    console.log(allTodo)

    return res.status(200).json(allTodo)
})

// ToDoアイテム一覧id取得

app.get('/api/todos/:id', async (_req: Request, res: Response) => {
    const todo = await prisma.todo.findUnique({
        where: { id: parseInt(_req.params?.id) },
    })
    console.log(todo)

    return res.status(200).json(todo)
})

// ToDoアイテム作成
app.post('/api/todos', async (_req: Request, res: Response) => {
    const { todo, status, is_delete } = _req.body
    const creatTodo = await prisma.todo.create({
        data: { todo, status, is_delete },
    })

    return res.status(200).json(creatTodo)
})

// ToDoアイテム更新
app.put('/api/todos/:id', async (_req: Request, res: Response) => {
    const { todo, status, is_delete } = _req.body
    const updateTodo = await prisma.todo.update({
        where: { id: parseInt(_req.params?.id) },
        data: { todo, status, is_delete },
    })

    return res.status(200).json(updateTodo)
})

// Todoアイテム削除
app.delete('/api/todos/:id', async (_req: Request, res: Response) => {
    const deleteTodo = await prisma.todo.delete({
        where: { id: parseInt(_req.params?.id) },
    })

    return res.status(200).json(deleteTodo)
})
