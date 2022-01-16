import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  user_name: String,
  first_name: String,
  last_name: String,
  user_image: String,
  favourite_tracks: { type: mongoose.Types.ObjectId, ref: 'track' },
})

const User = mongoose.model('User', userSchema, 'user')

export default User
