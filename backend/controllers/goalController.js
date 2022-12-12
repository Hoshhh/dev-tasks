const asyncHandler = require('express-async-handler')

const Task = require('../models/goalModel')

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
const tasks = await Task.find()

    res.status(200).json(tasks);
})

//@desc     Set goal
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const task = await Task.create({
        title: req.body.title //might can remove .title
    })

    res.status(200).json(task);
})

//@desc     Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(400);
        throw new Error('Task not found')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTask);
})

//@desc     Delete goal
//@route    DELETE /api/goals
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
        res.status(400);
        throw new Error('Task not found')
    }

    await Task.deleteOne(task)

    res.status(200).json({ id: req.params.id });
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}