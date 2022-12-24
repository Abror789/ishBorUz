const express =require('express')
const router=express.Router()
const Job =require('../models/Job')
const verifyFunc=require('../config/verifyToken')

router
    .route('/')
    .get(async (req,res)=>{
        try {
            const {page=1,limit=12}=req.query
            const jobs= await Job.find({isShow:true})
                .limit(limit * 1)
                .skip((page-1)*limit)
            res.status(200).json({
                total:jobs.length,
                jobs,
                page
            })
        }catch (e) {
            console.log(e)
            res.status(500).json({
                error:e
            })
        }
    })
    .post(async (req,res)=>{
        const {jobTitle,professionInfo,experience,salary,jobType,region,age,gender,phone}=req.body

        const job=new Job({jobTitle,professionInfo,experience,salary,jobType,region,age,gender,phone,create_at:new Date().getTime()})
        try{
            await job.save()
            res.status(201).json({
                message:"Job add success"
            })
        }catch (error) {
            console.log(error)
            res.status(500).json({
                message:error
            })
        }
    })
router
    .route('/notAllow')
    .get(verifyFunc,async (req,res)=>{
        try {
            const {page=1,limit=12}=req.query
            const jobs= await Job.find({isShow:false})
                .limit(limit * 1)
                .skip((page-1)*limit)
            res.status(200).json({
                total:jobs.length,
                jobs,
                page
            })
        }catch (e) {
            console.log(e)
            res.status(500).json({
                error:e
            })
        }
    })
router
    .route("/region/:region")
    .get(async (req,res)=>{
        try {
            const regionId=req.params.region
            const {page=1,limit=12}=req.query
            const regionLength=await Job.find({region:regionId,isShow:true})
            const region=await Job.find({region:regionId,isShow:true})
                .limit(limit * 1)
                .skip((page-1)*limit)
            res.status(200).json({
                total:region.length,
                region,
                page,
                totalRegion:regionLength.length
            })
        }catch (e) {
            console.log(e)
            res.status(500).json({
                error:e
            })
        }
    })

router
    .route("/:id")
    .get(async (req,res)=>{
        const id=req.params.id
        try {
            const data=await Job.findById(id)
            res.status(200).json({
                data
            })
        }catch (err){
            console.log(err)
            res.status(500).json({
                message:err
            })
        }
        // const id=req.params.id
        // if (!id){}
        // res.status(404).json({
        //     message:"Jon not Found"
        // })
        // Job.findById(id,(err,result)=>{
        //     if (err){
        //         res.send(err)
        //     }
        //     res.send(result)
        // })
    })
    .patch(verifyFunc,async (req,res)=>{
        const id =req.params.id
        const updates=req.body;
        const options={new:true}
        if (!id){
            res.status(404).json({
                message:"Job Not Found"
            })
        }

        try {
            const result=await Job.findByIdAndUpdate(id,updates,options)
            res.status(201).json({
                message:"Job edited",
                result
            })
        }catch (err){
            res.send(err)
        }
    })
    .delete(verifyFunc,async(req,res)=>{
        const id=req.params.id
        if (!id){
            res.status(404).json({
                message:"Job not Found"
            })
        }
        try {
           await Job.deleteOne({_id:id})
            res.sendStatus(200)
        } catch (error) {
            res.sendStatus(500)
        }
    })

module.exports=router
