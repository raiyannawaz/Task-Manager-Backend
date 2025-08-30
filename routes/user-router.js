const router = require('express').Router()
const authMiddleware = require('../middleware/auth-middleware')
const validateMiddleware = require('../middleware/validate-middleware')
const { getUser, updateUser } = require('../controllers/user-controller')
const updateUserSchema = require('../validators/user-validator')
const { upload } = require('../utils/upload')

router.route('/get-user').get(authMiddleware, getUser)

router.route('/update-user').put(authMiddleware, upload.single('file'), validateMiddleware(updateUserSchema), updateUser)

module.exports = router