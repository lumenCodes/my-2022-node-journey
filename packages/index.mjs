import express from 'express'
import morgan from 'morgan'
import parser from 'body-parser'
import bodyParser from 'body-parser'

const app = express()

// middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

const db = []
const port = 4000

app.listen(port, (req, res) => {
    console.log('server is listening evrything is good.')
})

// I tried catching an error here I don't know if it is working.
try {
    app.get('/home', (req, res) => {
        res.send ('<h1> Hello Chinwendu on the moove <h1>')
    })
    
} catch (error) {
    console.error(error)
}

app.get('/todo', (req, res) => {
    res.send(db)
})

app.post('/todo', (req, res) =>{
    const newItem = {
        time: Date.now(),
        body: req.body.text
    }
    db.push(newItem)
    res.send(db)
})