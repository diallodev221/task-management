const express =  require("express");


const { getAllTasks, addTask, getTask, editTask, deleteTask } = require("../api/tasks");


const router = express.Router();

router.route('/').get(getAllTasks).post(addTask)
router.route('/:id').get(getTask).put(editTask).delete(deleteTask)


module.exports = router;
