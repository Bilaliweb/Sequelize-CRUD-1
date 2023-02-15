const express = require('express')
const router = express.Router()
const userCon = require('../controller/controller')

router.get('/', userCon.findAllUsers)
router.get('/:id', userCon.findUserById)
router.post('/', userCon.createUser)
router.put('/:id', userCon.updateUser)
router.delete('/:id', userCon.deleteUserById)

module.exports = router