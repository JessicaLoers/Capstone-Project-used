import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
  artist_name: String,
  infos: String,
  tracks: Array,
  artist_image: String,
  fav_of_user: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
})

const Artist = mongoose.model('Artist', artistSchema, 'artist')

export default Artist
