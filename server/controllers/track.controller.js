import Track from '../models/track.model.js'
import User from '../models/user.model.js'

const getAllTracks = async (req, res) => {
  const track = await Track.find()

  res.json(track)
}

const getTrack = async (req, res) => {
  const trackId = req.params.trackId
  const foundTrack = await Track.findById(trackId)
  res.json(foundTrack)
}

const postTrack = async (req, res) => {
  const track = new Track({
    track_name: req.body.track_name,
    artist: req.body.artist,
    year: req.body.year,
    sampled_in: req.body.sampled_in,
    sampled: req.body.sampled,
    video_id: req.body.video_id,
    cover_image: req.body.cover_image,
    fav_of_user: req.body.fav_of_user,
    entry_of_user: req.body.entry_of_user,
  })
  console.log(req.body)

  try {
    const result = await track.save()

    res.json({
      message: 'You inserted the track sucessfully with the id:' + result._id,
      data: result,
    })
  } catch (error) {
    res.json({ status: 'Something else happened.' })
  }
}

const putTrack = async (req, res) => {
  const trackId = req.params.trackId
  const track = req.body // sind alle Eigenschaften hinter
  const result = await Track.findByIdAndUpdate(trackId, track, {
    returnDocument: 'after',
  })
  res.json(result)
}

const deleteTrack = async (req, res) => {
  const trackId = req.params.trackId

  try {
    const result = await Track.findOneAndDelete(trackId)
    if (result) {
      res.json({
        success: true,
        message: 'Successfully deleted Track.',
      })
    } else {
      res.json({
        success: false,
        message: 'Could not delete Track from database.',
      })
    }
  } catch (error) {
    res.json({ status: 'Something else happened.' })
  }
}

export { getAllTracks, getTrack, postTrack, putTrack, deleteTrack }
