const mongoose=require('mongoose')

const EventModel = new mongoose.Schema({
  id: {
    type:Number,
    //required:true,
    unique:true
  },
  act:{
    type:String,
    //required:true
  },
  date:{
    type:String,
   // required:true
  },
  time:{
    type:String,
   // required:true
  },
  httpId:{
    type:String,
  },
  image:{
    type:String,
    default:""
  }
})


//console.log(EventModel)


module.exports= mongoose.model('events',EventModel)