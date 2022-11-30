require('./config.env')
const mongoose = require('mongoose')


console.log(process.env.MONGO_URL)
const connectdb = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      console.log(`MONGO DB connected: ${conn.connection.host}`)

      
  }catch(err){
    console.log(err.stack)
   // process.exit(1)
  }
}

connectdb()



module.exports=connectdb