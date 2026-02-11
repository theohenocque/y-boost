// ensemble des imports
import express, { Application, Request, Response } from 'express'
import { pool } from './db'

const app: Application = express()
const PORT: number = 4000

interface User {
    id: number
    username: string
    email: string
    name: string
}

const users: User[] = []

app.use(express.json())

// logique métier

// 🔹 route par ID (BDD)
app.get('/users/id/:id', async (req: Request, res: Response) => {
    const id = req.params.id

    const [rows] = await pool.query(
        "SELECT id, email, name FROM users WHERE id = ?",
        [id]
    )

    res.status(200).json(rows)
})

// 🔹 route par username
app.get('/users/username/:username', (req: Request, res: Response) => {
    const { username } = req.params

    const result = users.filter((user) =>
        user.username.toLowerCase() === username.toLowerCase()
    )

    res.json(result)
})

app.post('/users', (req: Request, res: Response) => {
    res.json({ success: req.body.name })
})

// écouter sur un port
app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})



let text: string | null = ''
text = null

const nbr: number = 0
const smbl: symbol = Symbol('')
const bool: boolean = true
const obj: object = {}

const tblString: string[] = ['xxx', 'yyy']

const nul: null = null
const underfind: undefined = undefined

const test = (a: number, b: number): number => {
    return a + b
}
