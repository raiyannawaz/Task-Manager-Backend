const router = require('express').Router()
const validateMiddleware = require('../middleware/validate-middleware')
const validators = require('../validators/auth-validator')
const authController = require('../controllers/auth-controller')

router.route('/sign-up').post(validateMiddleware(validators.signUpSchema), authController.signUp)

router.route('/log-in').post(validateMiddleware(validators.logInSchema), authController.logIn)

module.exports = router