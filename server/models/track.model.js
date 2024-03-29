import mongoose from 'mongoose'

const trackSchema = new mongoose.Schema({
  track_name: String,
  artist: String,
  year: Number,
  sampled_in: Array,
  sampled: Array,
  video_id: String,
  cover_image: String,
  fav_of_user: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  entry_of_user: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
})

const Track = mongoose.model('Track', trackSchema, 'track')

export default Track
