import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  user_name: String,
  added_track_samples: Array,
  favourite_tracks: Array
})

const User = mongoose.model('User', userSchema, 'user')

export default User