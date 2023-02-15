const modelOne = require('../models/model');
var crudOps = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatemodelOne: updatemodelOne
}

function findAll() {
    return modelOne.findAll();
}

function findById(id) {
    return modelOne.findByPk(id);
}

function deleteById(id) {
    return modelOne.destroy({ where: { id: id } });
}

function create(user) {
    var newUser = new modelOne(user);
    return newUser.save();
}

function updatemodelOne(user, id) {
    var updateUser = {
        title: user.title,
        description: user.description,
        budget: user.budget,
        contact_email: user.contact_email
    };
    return modelOne.update(updateUser, { where: { id: id } });
}
module.exports = crudOps