import mongoose from 'mongoose'

import User from '../models/user.model.js'
import Track from '../models/track.model.js'
import req from 'express/lib/request'

// const toId = mongoose.Types.ObjectId

// const getUserFavourite = async (req, res) => {
//   const user = toId(req.params.user)

//   const favourite = await Track.findById(req.params.track)
//   favourite.user = user
//   favourite.save()

//   // const favourites = User.findByIdAndUpdate(req.params.user, {
//   //   favourite_tracks: req.params.track,
//   // })

//   res.json(favourite)
// }

const putFavouriteTrackInUserCollection = async (req, res) => {
  const user = req.params.userId
  const user = req.body
  User.find(req.body.favourite_tracks).then((result) => {
    if (result.length > 0) {
      User.findOneAndUpdate(
        { $addToFav: { favourite_tracks: result[0]._id } },
        { new: true }
      )
        .then((user) => {
          res.status(200).json({ message: result[0]._id })
        })
        .catch((err) => {
          console.log('Error to update the users favourite tracks')
        })
    }

    if (result.length === 0) {
      Track.create(req.body._id).then(async (favourite_tracks) => {
        const user = await User.findByIdAndUpdate(
          { $push: { favourite_tracks: favourite_tracks._id } },
          { new: true }
        )
        res.json({ message: favourite_tracks._id })
      })
    }
  })
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
  putFavouriteTrackInUserCollection,
}
