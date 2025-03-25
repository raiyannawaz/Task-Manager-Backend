const Task = require('../models/Task')

const getTasks = async (req, res) => {
    try {
        let { _id: user_id } = req
        let response = await Task.find({ user_id })
        res.status(200).json(response)
    }
    catch (err) {
        res.status(404).json({ message: err.message || 'Uncaught error' })
    }
}

const getTask = async (req, res) => {
    try {

        let { id: task_id } = req.params

        let { _id: user_id } = req

        let response = await Task.findOne({_id: task_id, user_id})

        if (!response) {
            return res.status(400).json({ message: `Task not found` })
        }

        if (user_id.toString() !== response.user_id.toString()) {
            return res.status(403).json({ message: 'Not allowed to get' })
        }

        res.status(200).json(response)
    }
    catch (err) {
        res.status(404).json({ message: err.message || 'Uncaught error' })
    }
}

const addTask = async (req, res) => {
    try {

        let { _id:user_id } = req
        let { title, description, category, priority } = req.body

        let taskExist = await Task.findOne({ title, user_id })

        if (taskExist) {
            return res.status(400).json({ message: 'Task already exist' })
        }

        let newTask = {
            user_id: user_id.toString(),
            title, description,
            category, priority
        }

        await Task.create(newTask)
        res.status(200).json({ message: 'Task created successfully' })
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ message: err.message || 'Uncaught error' })
    }
}

const updateTask = async (req, res) => {
    try {

        let { id: task_id } = req.params

        let { _id:user_id } = req

        let taskExist = await Task.findOne({_id: task_id, user_id})

        if (!taskExist) {
            return res.status(400).json({ message: 'Task not found' })
        }
        
        if (taskExist.user_id.toString() !== user_id.toString()) {
            return res.status(403).json({ message: 'Not allowed to update'})
        }

        let taskTitleExist = await Task.findOne({ title: req.body.title, user_id })

        if (taskTitleExist && taskTitleExist._id.toString() !== task_id.toString()) {
            return res.status(400).json({ message: 'Task already exist re' })
        }

        let newTask = { ...req.body, updated_at: Date.now() }
        await Task.findByIdAndUpdate(task_id, newTask)

        res.status(200).json({ message: 'Task updated successfully' })

    }
    catch (err) {
        res.status(404).json({ message: err.message || 'Uncaught error' })
    }
}

const deleteTask = async (req, res) =>{
    try{
        let { id:task_id } = req.params;

        let { _id:user_id } = req

        let taskExist = await Task.findOne({_id: task_id, user_id})

        if(!taskExist){
            return res.status(400).json({message: 'Task not found'})
        }

        if(taskExist.user_id.toString() !== user_id.toString()){
            return res.status(400).json({message: 'Not allowed to delete'})
        }

        await Task.findByIdAndDelete(task_id)

        res.status(200).json({message: 'Task deleted successfully'})

    }
    catch(err){
        res.status(404).json({message: err.message || 'Uncaught error'})
    }
}

module.exports = { getTasks, getTask, addTask, updateTask, deleteTask }