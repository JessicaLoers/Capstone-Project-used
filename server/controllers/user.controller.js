import User from '../models/user.model.js'
import Track from '../models/track.model.js'

const putUserToTrack = async (req, res) => {
  const user = await User.findById(req.body.userId)
  const favourite = await Track.findById(req.body.trackId)
  console.log(req.body)
  if (favourite && user) {
    favourite.fav_of_user.push(user)
    user.favourite_tracks.push(favourite)
    try {
      await favourite.save()
      await user.save()
      res.json(favourite)
    } catch (error) {
      res.json(error)
    }
  } else {
    res.json({ message: 'track and/or user not found' })
  }
}

const deleteUserToTrack = async (req, res) => {
  const user = await User.findById(req.body.userId)
  const favourite = await Track.findById(req.body.trackId)
  console.log(req.body)
  if (favourite && user) {
    favourite.fav_of_user.pull(user)
    user.favourite_tracks.pull(favourite)
    try {
      await favourite.save()
      await user.save()
      res.json(favourite)
    } catch (error) {
      res.json(error)
    }
  } else {
    res.json({ message: 'track and/or user not found' })
  }
}

const getUser = async (req, res) => {
  const userName = req.params.userName
  const foundUser = await User.findOne({ first_name: userName }).populate(
    'favourite_tracks',
    'track_name artist year cover_image'
  )
  console.log(foundUser)
  res.json(foundUser)
}

const putUser = async (req, res) => {
  const userId = req.params.userId
  const user = req.body
  const result = await User.findByIdAndUpdate(userId, user, {
    returnDocument: 'after',
  })
  res.json(result)
}

const getAllUsers = async (req, res) => {
  const user = await User.find()
  res.json(user)
}

const postUser = async (req, res) => {
  const user = new User({
    user_name: req.body.user_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_image: req.body.user_image,
    favourite_tracks: req.body.favourite_tracks,
  })

  try {
    const result = await user.save()
    res.json({
      message: 'You inserted the user sucessfully with the id:' + result._id,
      data: result,
    })
  } catch (error) {
    res.json(error)
  }
}

export {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  putUserToTrack,
  deleteUserToTrack,
}
