const mongoose=require('mongoose')

const StatisticsSchema=new mongoose.Schema({
    workers:{
        type:Number,
        required:true
    },
    jobs:{
        type:Number,
        required:true
    },
    followers:{
        type:Number,
        required:true
    },
    visitors:{
        type:Number,
        required:true
    },
})
const Statistics=mongoose.model("statistics",StatisticsSchema)
module.exports=Statistics
