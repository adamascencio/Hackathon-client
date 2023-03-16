const router = require('express').Router()
const worldCtrl = require('../controllers/world.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, worldCtrl.index)
router.post('/', checkAuth, worldCtrl.create)
router.patch('/:worldId/update', checkAuth, worldCtrl.update)
router.delete('/:worldId/delete', checkAuth, worldCtrl.deleteWorld)


module.exports = router
