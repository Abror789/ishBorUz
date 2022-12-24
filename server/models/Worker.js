const mongoose=require('mongoose')

const WorkerSchema=new mongoose.Schema({
    jobTitle:{
        type:String,
        required:true
    },
    professionInfo:{
        type:String,
        required: true
    },
    experience:{
        type:Number,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    isShow:{
        type:Boolean,
        default:false
    },
    create_at:{
        type:String,
        required:false
    }
})
const Worker=mongoose.model("worker",WorkerSchema)
module.exports=Worker
