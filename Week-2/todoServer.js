/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/todos", (req, res) => {
  fs.readFile(__dirname + "/todos.json", "utf-8", (err, data) => {
    res.status(200).json(JSON.parse(data));
  });
});

app.post("/todos", (req, res) => {
  let todo = {
    id: Math.floor(Math.random() * 100000),
    title: req.body.title,
    completed: req.body.completed,
    description: req.body.description,
  };
  fs.readFile(__dirname + "/todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    todos.push(todo);

    fs.writeFile(__dirname + "/todos.json", JSON.stringify(todos), (err) => {
      res.status(201).json({ id: todo.id });
    });
  });
});

app.get("/todos/:id", (req, res) => {
  id = req.params.id;
  fs.readFile(__dirname + "/todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    let searchedTodo = todos.find((todo) => todo.id === Number(id));
    searchedTodo
      ? res.status(200).json(searchedTodo)
      : res.status(404).send("404 Not Found");
  });
});

app.put("/todos/:id", (req, res) => {
  id = req.params.id;
  fs.readFile(__dirname + "/todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    let index = todos.findIndex((todo) => todo.id === Number(id));
    if (index === -1) {
      res.status(404).send("Record not found....");
    } else {
      todos[index].title = req.body.title;
      todos[index].description = req.body.description;
      todos[index].completed = req.body.completed;

      fs.writeFile(__dirname + "/todos.json", JSON.stringify(todos), (err) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send("Updated Successfully....");
      });
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  id = req.params.id;
  fs.readFile(__dirname + "/todos.json", "utf-8", (err, data) => {
    let todos = JSON.parse(data);
    let updatedTodos = todos.filter((todo) => todo.id !== Number(id));
    if (updatedTodos) {
      fs.writeFile(
        __dirname + "/todos.json",
        JSON.stringify(updatedTodos),
        (err) => {
          res.status(200).send("Deleted Successfully....");
        }
      );
    } else {
      res.status(404).send("Record not found....");
    }
  });
});

app.get("/*", (req, res) => {
  res.status(404).send("Not found..");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// module.exports = app;