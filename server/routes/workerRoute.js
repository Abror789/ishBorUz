const express =require('express')
const router=express.Router()
const Worker =require('../models/Worker')
const verifyFunc=require('../config/verifyToken')




router
    .route('/')
    .get(async (req,res)=>{
        try {
            const {page=1,limit=12}=req.query
            const workers= await Worker.find({isShow:true})
                .limit(limit * 1)
                .skip((page-1)*limit)
            res.status(200).json({
                total:workers.length,
                workers,
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
        const {jobTitle,professionInfo,experience,salary,jobType,region,name,gender,phone}=req.body

        const worker=new Worker({jobTitle,professionInfo,experience,salary,jobType,region,name,gender,phone,create_at:new Date().getTime()})
        try{
            await worker.save()
            res.status(201).json({
                message:"Worker add success"
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
            const workers= await Worker.find({isShow:false})
                .limit(limit * 1)
                .skip((page-1)*limit)
            res.status(200).json({
                total:workers.length,
                workers,
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
    .route("/:id")
    .get((req,res)=>{
        const id=req.params.id
        if (!id){
            res.send(404).json({
                message:"Worker not Found"
            })
        }
        Worker.findById(id,(err,result)=>{
            if (err){
                res.send(err)
            }
            res.send(result)
        })
    })
    .patch(verifyFunc,async (req,res)=>{
        const id =req.params.id
        const updates=req.body;
        const options={new:true}
        if (!id){
            res.status(404).json({
                message:"Worker Not Found"
            })
        }

        try {
            const result= await Worker.findByIdAndUpdate(id,updates,options)
            res.status(201).json({
                message:"Worker edited",
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
                message:"Worker not Found"
            })
        }
        try {
            await Worker.deleteOne({_id:id})
            res.sendStatus(200)
        } catch (error) {
            res.sendStatus(500)
        }
    })

module.exports=router
