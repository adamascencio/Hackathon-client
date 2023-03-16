const router = require('express').Router()
const levelCtrl = require('../controllers/level.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, levelCtrl.index)
router.post('/', checkAuth, levelCtrl.create)
router.patch('/:levelId/update', checkAuth, levelCtrl.update)
router.delete('/:levelId/delete', checkAuth, levelCtrl.deleteLevel)

module.exports = router
