import mongoose from 'mongoose'

import User from '../models/user.model.js'
import Track from '../models/track.model.js'

const toId = mongoose.Types.ObjectId

const getUserFavourite = async (req, res) => {
  const user = toId(req.params.user)

  const favourite = await Track.findById(req.params.track)
  favourite.user = user
  favourite.save()

  // const favourites = User.findByIdAndUpdate(req.params.user, {
  //   favourite_tracks: req.params.track,
  // })

  res.json(favourite)
}

const getFavourite = async (rq, res) => {
  const favourites = await Track.find({}).populate({
    path: 'user',
    model: 'User',
  })
  res.json(favourites)
}

const getAllUsers = async (req, res) => {
  const user = await User.find()
  res.json(user)
}

const getUser = async (req, res) => {
  const userId = req.params.userId
  const foundUser = await User.findById(userId)
  res.json(foundUser)
}

const postUser = async (req, res) => {
  const user = new User({
    user_name: req.body.user_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
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

const putUser = async (req, res) => {
  const userId = req.params.userId
  const user = req.body // sind alle Eigenschaften hinter
  // dritter Paramter (.., .., {return }) damit bei Postman PUT nicht der letzte Stand sondern, das Update angezeigt wird!!
  const result = await User.findByIdAndUpdate(userId, user, {
    returnDocument: 'after',
  }) // {new: true} deprecated
  res.json(result)
}

const deleteUser = async (req, res) => {
  const userId = req.params.userId

  try {
    const result = await User.findOneAndDelete(userId)
    if (result) {
      res.json({
        success: true,
        message: 'Successfully deleted User.',
      })
    } else {
      res.json({
        success: false,
        message: 'Could not delete User from database.',
      })
    }
  } catch (error) {
    res.json({ status: 'Something else happened.' })
  }
}

export {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
  getUserFavourite,
  getFavourite,
}
