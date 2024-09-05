import express from 'express';

import taskModel from '../model/taskModel.js';

const taskRouter = express.Router();

// Get all tasks
taskRouter.get('/tasks', async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new task
taskRouter.post('/tasks', async (req, res) => {
  const task = new taskModel({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status // This will use the provided value or default to false
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit a task
taskRouter.put('/tasks/:id', async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.name = req.body.name || task.name;
    task.description = req.body.description || task.description;
    task.status = req.body.status !== undefined ? req.body.status : task.status;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
taskRouter.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await taskModel.deleteOne({ _id: req.params.id });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default taskRouter;  