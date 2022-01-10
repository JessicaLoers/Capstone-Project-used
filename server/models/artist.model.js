import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
  //artist_id: String,
  artistName: String,
  infos: String,
  tracks: Array
})

const Artist = mongoose.model('Artist', artistSchema, 'artist')

export default Artist