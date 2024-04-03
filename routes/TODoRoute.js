const {Router} = require('express');
const {getToDo,saveToDo,updateToDo,deleteToDo} = require("../controllers/ToDoController");

const router = Router();


// Get all todos
router.get('/', getToDo);

// Add a new todo
router.post('/save', saveToDo);

// Update a todo
router.post('/update', updateToDo);

// Delete a todo
router.post('/delete', deleteToDo);

module.exports = router;