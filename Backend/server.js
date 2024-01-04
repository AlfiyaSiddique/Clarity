import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/web.js";
import mongoose from "mongoose";

dotenv.config()

export const app = express();
const port = process.env.PORT

app.use(express.json({ limit: '10mb' }));

app.use(cors())
app.use("/api", router)

app.get("/", (req, res)=>{
  res.send("Clarity Backend")
})

// Database Connection and server
  try {
     mongoose.connect(process.env.DATABASE)
    .then(()=>{
    console.log('Successfully Connected To MongoDB Server!')
    })
  } catch (error) {
    console.log(error)
  }
  export const server =   app.listen(port, ()=>{
    console.log(`The server is running at ${port}`)
  })

