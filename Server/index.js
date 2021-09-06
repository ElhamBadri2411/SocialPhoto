import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express(); // uses express.
dotenv.config(); // for environment purposes

// for sending photos and posts
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes); //adds a /posts to every address, postRoutes are all the routes possible

app.get("/", (req, res) => {
  res.send("Hello to Social Photo API");
});

const PORT = process.env.PORT; // gets port number from constants file

mongoose // connects to the database
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    //listens
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
