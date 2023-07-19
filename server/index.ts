import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("<h1>Hello there</h1>")
})


const server = app.listen(5000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`),
)