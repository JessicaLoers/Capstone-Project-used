import express from 'express'

import {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  putUserToTrack,
  deleteUserInTrack,
  putUserToArtist,
  deleteUserInArtist,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/user', getAllUsers)
router.get('/user/:userName', getUser)
router.post('/user', postUser)
router.put('/user/:userId', putUser)
router.post('/favourite', putUserToTrack)
router.put('/favourite/remove', deleteUserInTrack)
router.post('/favourite-artist', putUserToArtist)
router.put('/favourite-artist/remove', deleteUserInArtist)

export default router
