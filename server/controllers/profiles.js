const { Profile, Progress, World } = require('../models')
const cloudinary = require('cloudinary').v2
var sequelize = require('sequelize');

async function index(req, res) {
  try {
    const profiles = await Profile.findAll(
      {
        include: [{ model: Progress, as: "progressRecords" },]
      }
    )
    res.json(profiles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile,
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url
    await profile.save()
    res.status(201).json(profile.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function show(req, res) {
  try {
    const profile = await Profile.findByPk(req.params.profileId, {
      include: [{
        model: Progress, as: "progressRecords"
      },],
    })
    console.log("ALERT ALERT ALERT profile", req.params.profileId)
    res.status(200).json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

// if we want to populate progress use below
// async function show(req, res) {
//   try {
//     const profile = await Profile.findByPk(req.params.profileId, {
//       include: [{ model: Progress, as: "Progress Records", where: {levelCompleted: true}, include: [{model: World, as: "worlds"}]  },]
//     })
//     console.log("ALERT ALERT ALERT profile", req.params.profileId)
//     res.status(200).json(profile)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ err: error })
//   }
// }

async function update(req, res) {
  console.log("update function triggered")
  try {
    const profile = await Profile.findByPk(req.params.profileId)
    profile.set(req.body)
    await profile.save()
    res.status(200).json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = { index, addPhoto, show, update }
