import mongoose from 'mongoose'


const trackSchema = new mongoose.Schema({
  //name: {type:mongoose.Schema.Types.ObjectId, ref:'artist'},
  //title: {type:String, required:true},
  name: String,
  track: String,
  album: String,
  year: Number,
  sampled_in: Array,
  sampled: Array,
  video_id: String,
  cover_image: String,

})

const Track = mongoose.model('Track', trackSchema, 'tracks')



export default Track