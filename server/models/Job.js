const mongoose=require('mongoose')

const JobSchema=new mongoose.Schema({
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
    age:{
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
const Job=mongoose.model("job",JobSchema)
module.exports=Job
