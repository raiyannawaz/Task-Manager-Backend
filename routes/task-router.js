const router = require('express').Router()
const authMiddleware = require('../middleware/auth-middleware')
const validateMiddleware = require('../middleware/validate-middleware')
const taskValidator = require('../validators/task-validator')
const taskController = require('../controllers/task-controller')

router.route('/get-tasks').get(authMiddleware, taskController.getTasks)

router.route('/get-task/:id').get(authMiddleware, taskController.getTask)

router.route('/create-task').post(authMiddleware, validateMiddleware(taskValidator.taskAddSchema),
taskController.addTask)

router.route('/update-task/:id').put(authMiddleware, validateMiddleware(taskValidator.taskUpdateSchema),
taskController.updateTask)

router.route('/delete-task/:id').delete(authMiddleware, taskController.deleteTask)

module.exports = router