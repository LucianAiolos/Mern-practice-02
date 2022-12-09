const express = require('express') 
const { default: mongoose } = require('mongoose')
const router = require('./routes/memberRoutes')
const cors = require('cors')
// const mongodb = require('mongodb') dont' need this here.
require('dotenv').config()
mongoose.set('strictQuery', false) // need this to clear warnings.

const app = express()

const PORT = process.env.PORT 
const DB_URI = process.env.ATLAS_URI

// Check mongodb connection
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> {
    console.log("Connected to DB")
  })

  // app.use(cors({
  //   origin: "http://localhost:3000"
  // }))

  app.use(cors())

  // app.use((req, res, next) => {
  //   res.header("Access-Control-Allow-Origin", "http://localhost:3000/.TLD")
  //   // res.header("Access-Control-Allow-Origin", "http://localhost:3000/")
  //   res.header("Access-Control-Allow-Origin", "GET, HEAD, OPTIONS, POST, PUT")
  //   res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept")
  //   next()
  // } )
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(router)
  // app.use(cors({
  //   methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  //   origin: '*'
  // }))

app.listen(PORT, ()=> console.log('Listening on port ', PORT))

// console.log(process.env.ATLAS_URI)
console.log(cors)

