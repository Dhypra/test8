import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the car schema
const partSchema = new Schema({
  part_no: { type: String, required: true },
  part_name: { type: String, required: true },
  unique_no: { type: String, required: true },
  qty_kanban: { type: Number, required: true },
  qty_remain: { type: Number, required: true },
  address: { type: Number, required: true },
  status: { type: String, required: true },
  date_tapping: { type: Date, required: false },
  date_overflow: { type: Date, required: false },
  date_unpacking: { type: Date, required: false },
});

// Define the main user schema
const moduleSchema = new Schema({
  module_type: { type: String, required: true },
  exporter_name: { type: String, required: true },
  module_no: { type: String, required: true },
  module_note: { type: String, required: true },
  date_receive: { type: Date, required: true },

  parts: [partSchema], 
});

// Create and export the model

export const Module = mongoose.model("module", moduleSchema);