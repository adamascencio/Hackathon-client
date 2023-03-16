const { World, Level } = require('../models')


async function create(req, res) {
  try {
    const world = await World.create(req.body)
    res.status(200).json(world)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const world = await World.findByPk(req.params.worldId)
    world.set(req.body)
    await world.save()
    res.status(200).json(world)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteWorld(req, res) {
  try {
    const world = await World.findByPk(req.params.worldId)
    await world.destroy()
    res.status(200).json(world)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const worlds = await World.findAll(
      {
        include: [{ model: Level, as: "Levels" },]
      }
    )
    res.json(worlds)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = { create, update, deleteWorld, index }