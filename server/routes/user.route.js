import express from 'express'

import {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/track', getAllUsers)
router.get('/track/:trackId', getUser)
router.post('/track', postUser)
router.put('/track/:trackId', putUser)
router.delete('/track/:trackId', deleteUser)

export default user
