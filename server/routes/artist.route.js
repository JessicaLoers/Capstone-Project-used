import express from 'express'

import {
  getAllArtist,
  getArtist,
  postArtist,
  putArtist,
  deleteArtist,
} from '../controllers/artist.controller.js'

const router = express.Router()

router.get('/artist', getAllArtist)
router.get('/artist/:artistId', getArtist)
router.post('/artist', postArtist)
router.put('/artist/:artistId', putArtist)
router.delete('/artist/:artistId', deleteArtist)

export default router
