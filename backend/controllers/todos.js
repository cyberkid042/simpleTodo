const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ _id: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const postTodo = async (req, res) => {
  const { title } = req?.body;

  try {
    const todo = await Todo.create({ title });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateTodo = async (req, res) => {
  const { id } = req?.query;

  try {
    const todo = await Todo.findById(id);
    todo.isCompleted = !todo.isCompleted;
    todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteItem = async (req, res) => {
  const { id } = req?.query;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getTodos, postTodo, updateTodo, deleteItem };
