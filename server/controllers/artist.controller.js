import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
  name: String,
  infos: String,
  tracks: Array
})

const Artist = mongoose.model('Artist', artistSchema, 'artist')

export default Artist