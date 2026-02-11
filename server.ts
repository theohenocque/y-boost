    // essemble des imports
    import express, { type application} from 'express'
    import { pool } from './db'

    

    const app: application = express()
    const PORT: Number = 4000

    const users = []

    app.use(express.json())

    // logique métier
    app.get('/users/:id' , async (req: Request, res: Response) => {
        const id = req.params.id

        const [rows] = await pool.query(
            "SELECT id, email, name FROM users where id = ?",
            [id]
        )
        res.status(200).json(rows)
    })

    app.get('/users/:username', (req, res) => {
        const { username } = req.query

        const result = users.filter((user) => user.username.toLowerCase() == username.toLowerCase())
        res.json(result)
    })

    app.post('/users', (req, res) => {
        //req.body.name

        res.json({ success: req.body.name})
        
    })

    // ecouter sur un port

    app.listen(PORT, () => {
        console.log('server running on localhost:${PORT}')
    })






    let text: String | null = ''

    text = null
    const nbr: number = 0
    const smbl: Symbol = Symbol('')
    const bool: Boolean = true
    //const tabl; Array = []
    const obj: Object = {}

    const tblString: string[] = ['xxx', 'yyy']

    
    const nul: null = null
    const underfind: undefined = underfined







    const test = (a: Number, b: Number): number => {
        return a + b
    }