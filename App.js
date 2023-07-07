const express=require('express')
const app=express()
const book = require('./data');
const books = require('./data');

app.listen(5000,()=>{
    console.log("Listening to port 5000");
// console.log(book)
})

//specifying the id of the route 

app.get('/api/books/:id',(req,res)=>{

    const {id}=req.params
    
    const newBooks =book.find((product)=>
    product.id === id)
    console.log(req.params)
    // res.send("Created an Api for a book");
res.status(200).send(newBooks)
})
app.get('*',(req,res)=>{

    res.status(404).send("No Resources found")
})