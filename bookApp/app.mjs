import express from 'express'
// import nodemon from 'nodemon'

const app = express()


const port = process.env.PORT || 3000
console.log(port)

app.listen(port, (req, res) => {
    console.log(`Server is up and running on port ${port}, We are good to go...🚀`)
})

const db = []

try {
    
    app.get('/home', (req, res) => {
        res.send('<h3>This book app will be used to display the list of books that a user has created</h3>')
        
    });
} catch (error) {
    console.error(error)
}