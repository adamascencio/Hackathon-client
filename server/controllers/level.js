const { Level } = require('../models')

async function create(req, res) {
  try {
    const level = await Level.create(req.body)
    res.status(200).json(level)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const level = await Level.findByPk(req.params.levelId)
    level.set(req.body)
    await level.save()
    res.status(200).json(level)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteLevel(req, res) {
  try {
    const level = await Level.findByPk(req.params.levelId)
    await level.destroy()
    res.status(200).json(level)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const levels = await Level.findAll()
    res.json(levels)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}


module.exports = { create, update, deleteLevel, index }
