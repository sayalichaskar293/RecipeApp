import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import {userRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'


const app= express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter)

app.use("/recipes", recipesRouter)

mongoose.connect("mongodb+srv://sayalisc2021:recipe123@recipe.akda7wq.mongodb.net/recipe")

app.listen(3001, ()=>console.log("server has started"))