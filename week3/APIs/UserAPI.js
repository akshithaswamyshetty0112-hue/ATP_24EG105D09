import exp from 'express'
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser
} from '../controllers/userController.js'

export const userApp=exp.Router()

userApp.get('/users', getUsers)
userApp.get('/users/:id', getUserById)
userApp.post('/users', createUser)
userApp.put('/users', updateUser)
userApp.delete('/users/:id', deleteUser)


