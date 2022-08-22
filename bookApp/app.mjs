import bodyParser from 'body-parser'
import express from 'express'
import { ulid } from 'ulid'

export const app = express()


const port = process.env.PORT || 3000
console.log(port)

app.listen(port, (req, res) => {
    console.log(`Server is up and running on port ${port}, We are good to go...🚀`)
})

let db = []
app.use(express.json())

try {
    
    app.get('/home', (req, res) => {
        res.send('<h3>This book app will be used to display the list of books that a user has created</h3>' + db)
        // db.map()
        
    });

    

    app.post('/createBook', (req, res) => {
        const index = db.length - 1
        const newBook = 
        {
            
            // id: index + 1,
            id: ulid(),
            name: req.body.name,
            createdAt: Date.now()
        }

        // if (!newBook){
        //     res.send('Please add name of the book.')
        // }else{
        //     db.push(newBook)
        // }
        // index = db.length - 1
        db.push(newBook)
        res.send(db)
    })

    app.patch('/updateBook', (req, res) => {
        let incomingUpdate = req.body

        incomingUpdate.name = req.body.name
        console.log(incomingUpdate.name)
        incomingUpdate.id =req.body.id

        let updateItem = db.filter(((x) => x.id == incomingUpdate.id))
        console.log(updateItem[1])
            // db[updateItem][1] = incomingUpdate.name
            // db[updateItem.id] = incomingUpdate.id


        // db[updateItem] = req.body.name
        

        // res.send('hello')
        res.send(db[updateItem])

    })

    app.delete('/deletebook',(req,res)=>{
        // const deleteitem = db.indexOf(req.body)
        // const deleteIndex = 1
        // const removeItem = db.splice((deleteitem, deleteIndex))
        // console.log(removeItem)
        if (req.body !== Number && req.body == 0) {
            res.send('invalid request')
        } 
        const updatedBooks = db.filter((book)=> book.id !== req.body.id )
       db = updatedBooks

        res.send(db)
    })
} catch (error) {
    console.error(error)
}