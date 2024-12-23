import express from "express";
import mongoose from "mongoose";
import { PORT, url } from "./config.js";
import { Module } from "./models/moduleModels.js";
import moduleRoute from "./routes/moduleRoutes.js"
import cors from "cors";
import bodyParser from "body-parser";
// import axios from "axios";

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use("/module", moduleRoute);
app.use(cors());

// !GET
app.get("/", async (req, res) => {
return res.status(200).send({message:"get web"})
});

mongoose
  .connect(url)
  .then(() => {
    console.log("db connected");
    app.listen(PORT, () => {
      console.log(PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
