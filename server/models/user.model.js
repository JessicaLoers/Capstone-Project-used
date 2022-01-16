import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  user_name: String,
  first_name: String,
  last_name: String,
  user_image: String,

  // looking for an Id of a diffenet Object
  favourite_tracks: { type: mongoose.Types.ObjectId, ref: 'Track' },
})

const User = mongoose.model('User', userSchema, 'User')

export default User

// user_name: { type: String, required: true },
//   first_name: { type: String, required: true },
//   last_name: { type: String, required: true },
//   user_image: { type: String, required: true },
