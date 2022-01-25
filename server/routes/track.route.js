import express from 'express'

import {
  getAllTracks,
  getTrack,
  postTrack,
  putTrack,
  deleteTrack,
  putSamples,
} from '../controllers/track.controller.js'

const router = express.Router()

router.get('/track', getAllTracks)
router.get('/track/:trackId', getTrack)
router.post('/track', postTrack)
router.put('/track/add-sample', putSamples)
router.put('/track/:trackId', putTrack)
router.delete('/track/:trackId', deleteTrack)

export default router
