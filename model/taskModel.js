import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  status: { type: Boolean, default: false },
});

export default model('Task', taskSchema);