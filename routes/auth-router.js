const router = require('express').Router()
const validateMiddleware = require('../middleware/validate-middleware')
const authMiddleware = require('../middleware/auth-middleware')
const validators = require('../validators/auth-validator')
const authController = require('../controllers/auth-controller')

router.route('/sign-up').post(validateMiddleware(validators.signUpSchema), authController.signUp)

router.route('/sign-in').post(validateMiddleware(validators.logInSchema), authController.signIn)

router.route('/sign-out').post(authMiddleware, authController.signOut)

module.exports = router