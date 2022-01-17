import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  user_name: String,
  first_name: String,
  last_name: String,
  user_image: String,

  // tells mongoose, that it referencing to document, track from collections "track" ??
  favourite_tracks: [{ type: mongoose.Types.ObjectId, ref: 'Track' }],
})

const User = mongoose.model('User', userSchema, 'user')

export default User
