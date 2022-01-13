import mongoose from 'mongoose'

const trackSchema = new mongoose.Schema({
  //name: {type:mongoose.Schema.Types.ObjectId, ref:'artist'},
  //title: {type:String, required:true},

  track_name: String,
  artist: String,
  year: Number,
  sampled_in: Array,
  sampled: Array,
  video_id: String,
  cover_image: String,
})

const Track = mongoose.model('Track', trackSchema, 'track')

export default Track
