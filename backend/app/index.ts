import express, { Application, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



const app: Application = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) => {
  const allTodo = await prisma.todo.findMany()
  console.log(allTodo)
  return res.status(200).send({
    message: `Hello World${allTodo[0].todo}`,
  })
})

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}
