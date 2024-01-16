const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
// const ToDoRoutes = require("./routes/ToDoRoutes")
const UserRoutes = require('./routes/UserRoutes')
const CategoriesRoutes = require('./routes/CategoriesRoutes')

// connect to express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/", UserRoutes);
app.use("/category", CategoriesRoutes);



// connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

  
  app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}...`));


