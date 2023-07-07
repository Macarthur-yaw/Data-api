const express=require('express')
const app=express()
const book = require('./data')

app.listen(5000,()=>{
    console.log("Listening to port 5000");
// console.log(book)
})
app.get('/api/books',(req,res)=>{
    // res.send("Created an Api for a book");
res.status(200).send(book)
})
