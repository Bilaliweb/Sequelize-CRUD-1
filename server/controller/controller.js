// const { findAll, create, findById, updatemodelOne, deleteById } = require('../crud/crud');
const controller = require('../crud/crud')
const userController = {
    findAllUsers: findAllUsers,
    createUser: createUser,
    findUserById: findUserById,
    deleteUserById: deleteUserById,
    updateUser: updateUser
}

function createUser(req, res) {
    let user = req.body;
    controller.create(user)
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
}

function findAllUsers(req, res){
    controller.findAll()
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
}

function findUserById(req, res){
    controller.findById(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
}

async function updateUser(req, res) {
    await controller.updatemodelOne(req.body, req.params.id)
    controller.findById(req.params.id)
    .then((data) => {
        res.status(200).json({
            message: "User Updated Successfully",
            user: data
        })
    })
}

function deleteUserById(req, res) {
    controller.deleteById(req.params.id)
    .then((data) => {
        res.status(200).json({
            message: "User Delete Successfully",
            user: data
        })
        // res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = userController