const {
  getTodos,
  postTodo,
  updateTodo,
  deleteItem,
} = require("../controllers/todos");
const Todo = require("../models/Todo");

const router = require("express").Router();

router.get("/", getTodos);

router.post("/", postTodo);

router.put("/", updateTodo);

router.delete("/", deleteItem);

module.exports = router;
