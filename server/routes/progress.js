const router = require('express').Router()
const progressCtrl = require('../controllers/progress.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, progressCtrl.index)
router.post('/', checkAuth, progressCtrl.create)
router.patch('/:progressId/update', checkAuth, progressCtrl.update)
router.delete('/:progressId/delete', checkAuth, progressCtrl.deleteProgress)

module.exports = router
