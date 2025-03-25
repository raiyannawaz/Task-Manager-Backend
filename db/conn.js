const { connect } = require('mongoose')

const connectToDb = async () =>{
    try{
        return await connect(process.env.MONGO_URL).then(()=>{
            console.log('Connected...')
        }).catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports = { connectToDb }