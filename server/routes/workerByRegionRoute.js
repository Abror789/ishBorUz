const express =require('express')
const router=express.Router()
const Worker =require('../models/Worker')


router
    .route("/:region")
    .get(async (req,res)=>{
        try {
            const regionId=req.params.region
            const {page=1,limit=12}=req.query
            const regionLength=await Worker.find({region:regionId,isShow:true})
            const region=await Worker.find({region:regionId,isShow:true})
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

module.exports=router
