import express from "express";
import { Module } from "../models/moduleModels.js";

const router = express.Router();
import cors from "cors";

router.use(cors());

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let newModule = req.body;
    const module = await Module.create(newModule);
    return res.status(200).send(module);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const {id}=req.params;
    console.log(req.body);

const result=await Module.findByIdAndUpdate(id,req.body)
if(!result){
  
  return res.status(400).send({message:"not found"});
}  
return res.status(200).send(module);

  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

router.delete("/all", async (req, res) => {
  try {
    const result = await Module.deleteMany({});
    if (!result) {
      return res.status(400).send({ message: "not found" });
    }
    return res.status(200).send({ message: "deleted" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Module.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).send({ message: "not found" });
    }
    return res.status(200).send({ message: "deleted" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const module = await Module.find({});
    console.log(module)
    return res.status(200).send({
      count: module.length,
      data: module,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default router;
