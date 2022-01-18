import express from 'express'

import {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  putUserToTrack,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/user', getAllUsers)
router.get('/user/:userName', getUser)
router.post('/user', postUser)
router.put('/user/:userId', putUser)
router.post('/favourite/:userId/:trackId', putUserToTrack)

export default router
