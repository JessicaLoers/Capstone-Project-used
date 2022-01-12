import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
  artist_name: String,
  infos: String,
  tracks: Array,
  artist_image: String,
})

const Artist = mongoose.model('Artist', artistSchema, 'artist')

export default Artist
