const express =require('express')
const router=express.Router()
const Worker =require('../models/Worker')
const Job =require('../models/Job')
const Statistics=require('../models/Statistics')


router
    .route('/')
    .get( (req,res)=>{
        const promise=new Promise((resolve, reject)=>{
            Worker.find({isShow:true}, (err,result)=>{
                    if (err){
                        res.send(err)
                    }
                    resolve({work:result.length})
                })
        })
        const promise1=new Promise((resolve, reject)=>{
            Job.find({isShow:true}, (err,result)=>{
                if (err){
                    res.send(err)
                }
                resolve({job:result.length})
            })
        })
        Promise.all([promise,promise1])
            .then((result)=>{
                res.send(result)
            })

        // let worker=0
        // let job=0
        // Worker.find({isShow:true},async  (err,result)=>{
        //     if (err){
        //         res.send(err)
        //     }
        //     worker=await result.length
        // })
        // Job.find({isShow:true}, async (err,result)=>{
        //     if (err){
        //         res.send(err)
        //     }
        //     job=await result.length
        // })
        //
        // console.log(job,worker)
        // res.send('hi')



        // res.send(200).json({
        //     worker:worker.length,
        //     job:job.length
        // })
        // Statistics.find({},(err,result)=>{
        //     if (err){
        //         res.send(err)
        //     }
        //     res.send(result)
        // })
    })
    // .post(async (req,res)=>{
    //     const {workers,jobs,followers,visitors}=req.body
    //
    //     const statistics=new Statistics({workers,jobs,followers,visitors})
    //
    //     try {
    //         await statistics.save()
    //         res.status(201).json({
    //             message:"Statistics add success"
    //         })
    //     }catch (error) {
    //         console.log(error)
    //         res.status(200).json({
    //             message:error
    //         })
    //     }
    // })
// router
//     .route('/:id')
//     .patch(async (req,res)=>{
//         const id =req.params.id
//         const updates=req.body;
//         const options={new:true}
//         if (!id){
//             res.status(404).json({
//                 message:"Statistics Not Found"
//             })
//         }
//
//         try {
//             const result=await Statistics.findByIdAndUpdate(id,updates,options)
//             res.status(201).json({
//                 message:"Statistics edited"
//             })
//         }catch (err){
//             res.send(err)
//         }
//     })

module.exports=router
