import Artist from '../models/artist.model.js'

const getAllArtist = async (req, res) => {
  const artist = await Artist.find()

  res.json(artist)
}

const getArtist = async (req, res) => {
  const artistId = req.params.artistId
  const foundArtist = await Artist.findById(artistId)
  res.json(foundArtist)
}

const postArtist = async (req, res) => {
  const artist = new Artist({
    artist_name: req.body.artist_name,
    infos: req.body.infos,
    tracks: req.body.tracks,
    artist_image: req.body.artist_image,
    fav_of_user: req.body.fav_of_user,
    entry_of_user: req.body.entry_of_user,
  })
  console.log(req.body)
  try {
    const result = await artist.save()
    res.json({
      message: 'You inserted the artist sucessfully with the id:' + result._id,
      data: result,
    })
  } catch (error) {
    res.json(error)
  }
}

const putArtist = async (req, res) => {
  const artistId = req.params.artistId
  const artist = req.body
  const result = await Artist.findByIdAndUpdate(artistId, artist, {
    returnDocument: 'after',
  })
  res.json(result)
}

const deleteArtist = async (req, res) => {
  const artistId = req.params.artistId

  try {
    const result = await Artist.findOneAndDelete(artistId)
    if (result) {
      res.json({
        success: true,
        message: 'Successfully deleted artist.',
      })
    } else {
      res.json({
        success: false,
        message: 'Could not delete artist from database.',
      })
    }
  } catch (error) {
    res.json({ status: 'Something else happened.' })
  }
}

export { getAllArtist, getArtist, postArtist, putArtist, deleteArtist }
