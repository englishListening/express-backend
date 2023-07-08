import express from "express"
import serverless from "serverless-http"
const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to the H")

})

app.get("/about",(req,res)=>{
    res.json({
        name:"Mukha",
        hobby:{
            1:"Football",
            2:"Volleyball",
            3:"Watching Anime",
            4:"Editing Video"
        }
    })
})

export const handler = serverless(app)