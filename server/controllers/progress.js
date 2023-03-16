const { Progress } = require('../models')


async function create(req, res) {
  try {
    const progress = await Progress.create(req.body)
    res.status(200).json(progress)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function update(req, res) {
  try {
    const progress = await Progress.findByPk(req.params.progressId)
    progress.set(req.body)
    await progress.save()
    res.status(200).json(progress)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function deleteProgress(req, res) {
  try {
    const progress = await Progress.findByPk(req.params.progressId)
    await progress.destroy()
    res.status(200).json(progress)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

async function index(req, res) {
  try {
    const progresses = await Progress.findAll({
    })
    res.json(progresses)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}


module.exports = { create, update, deleteProgress, index }