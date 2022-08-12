import express from 'express'

export const app = express()


const port = process.env.PORT || 3000
console.log(port)

app.listen(port, (req, res) => {
    console.log(`Server is up and running on port ${port}, We are good to go...🚀`)
})

const db = []
console.log(db)
app.use(express.json())

try {
    
    app.get('/home', (req, res) => {
        res.send('<h3>This book app will be used to display the list of books that a user has created</h3>' + db)
        
    });

    app.post('/createBook', (req, res) => {
        if (!(req.body)){
            res.send('Please add name of the book.')
        }
        const newBook = 
        {
            id: req.body.id,
            name: req.body.name,
            createdAt: Date.now
        }
        db.push(newBook)
        res.send(db)
    })

    app.patch('/updateBook', (req, res) => {
        // const update = req.body
        const updateItem = db.findIndex((obj => req.body.id))
        db[updateItem] = req.body.name

        // res.send('hello')
        res.send(db[updateItem])

    })

    app.delete('/deletebook',(req,res)=>{
        const deleteitem = db.indexOf(req.body)
        const deleteIndex = 2
        const removeItem = db.splice((deleteitem, deleteIndex))
        console.log(removeItem)

        // res.send('hello')
        res.send(db)
    })
} catch (error) {
    console.error(error)
}