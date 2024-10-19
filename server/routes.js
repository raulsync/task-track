const express = require("express");
const router = express.Router();
const { getConnectedClient } = require("./dataBase");
const { ObjectId } = require("mongodb");

const getClient = () => {
  const client = getConnectedClient();
  const collection = client.db("todosdb").collection("todos");
  return collection;
};

//get /todos =>  read todos
router.get("/todos", async (req, res) => {
  const collection = getClient();
  const todos = await collection.find({}).toArray();
  res.status(200).json(todos);
});

//post /todos => create todos
router.post("/todos", async (req, res) => {
  const collection = getClient();
  const { todo } = req.body;

  const newTodo = await collection.insertOne({ todo, status: false });
  res.status(201).json({ todo, status: false, _id: newTodo.insertedId });
});

//delete todo/:id
router.delete("/todos/:id", async (req, res) => {
  const collection = getClient();
  const _id = new ObjectId(req.params.id);
  const deletedTodo = await collection.deleteOne({ _id });
  res.status(200).json(deletedTodo);
});

//put todo/:id
router.put("/todos/:id", async (req, res) => {
  const collection = getClient();
  const _id = new ObjectId(req.params.id);

  const { status } = req.body;
  const updateTodo = await collection.updateOne(
    { _id },
    { $set: { status: !status } },
  );
  res.status(200).json(updateTodo);
});

module.exports = router;
