import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
  artist_name: String,
  infos: String,
  artist_tracks: Array
})

const Artist = mongoose.model('Artist', artistSchema, 'artist')

export default Artist