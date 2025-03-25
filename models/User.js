const { Schema, model } = require('mongoose')
const { genSalt, hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            },
            created_at: {
                type: Date,
                default: Date.now()
            }
        }
    ]
})

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        let salt = await genSalt(10)
        let hashPassword = await hash(this.password, salt)

        this.password = await hashPassword
        next()
    }
})

UserSchema.methods.generateToken = async function () {

    let payload = { _id: this._id.toString() }

    let token = await sign(payload, process.env.SECRET_KEY)

    this.tokens = await [...this.tokens, { token }]

    await this.save()

    return token

}

UserSchema.methods.comparePassword = async function (password) {
    let comPass = await compare(password, this.password)
    return comPass
}

const User = new model('User', UserSchema)

module.exports = User