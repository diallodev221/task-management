const express =  require("express");
const cors = require('cors');
require('dotenv').config();

const router = require("./routes/task");
const connectDB = require('./db');
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");




const PORT = process.env.PORT || 3000
const app = express()

// middleware
// cors configuration
app.use(cors({ origin: 'http://localhost:3000'}))

// express json parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(notFound)
app.use(errorHandlerMiddleware)



//router
app.get("/", (req, res) => res.send("Task Manager App"))
app.use("/api/v1/tasks", router);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // console.log('URI: ' +process.env)
    console.log('PORT: ' +process.env.PORT)
    app.listen(PORT, console.log(`App is running on port: http://localhost:${PORT}`)
    )
  } catch (error) {
    console.log(error);
  }
}

start()



