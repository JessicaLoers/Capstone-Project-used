import express from 'express'

import {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
  putFavouriteTrackInUserCollection,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/user', getAllUsers)
router.get('/user/:userId', getUser)
router.post('/user', postUser)
router.put('/user/:userId', putUser)
router.delete('/user/:userId', deleteUser)

router.put('favourites/:userId', putFavouriteTrackInUserCollection)

// router.get('/favourite/:user/:track', getUserFavourite)

export default router
