import User from '../models/user.model.js'

const getAllUsers = async (req, res) => {
  const user = await user.find()

  res.json(user)
}

const getUser = async (req, res) => {
  const userId = req.params.userId
  const foundUser = await User.findById(userId)
  res.json(foundUser)
}

const postUser = async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    added_track_samles: req.body.added_track_samples,
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

export { getAllUsers, getUser, postUser, putUser, deleteUser }