import express from 'express'
// import nodemon from 'nodemon'

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
        if (!req.body){
            console.error('Please add name of the book.')
        }
        const newBook = 

        {
            name: req.body.name,
            createdAt: Date.now
        }
        db.push(newBook)
        res.send(db)
    })
} catch (error) {
    console.error(error)
}