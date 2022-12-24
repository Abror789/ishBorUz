const express =require('express')
const connectDB=require('./config/db')
const cors =require('cors')
const bodyParser = require('body-parser')
const morgan=require('morgan')
const path=require('path')
const statistics=require('./routes/statisticsRoute')
const worker=require('./routes/workerRoute')
const workerByRegion=require('./routes/workerByRegionRoute')
const job =require('./routes/jobRoute')
const login=require('./routes/loginRoute')



require('dotenv').config()


connectDB().then(()=>{
    console.log('Mongodb connected')
})

const app =express()


app.use(express.json())
app.use(cors())
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api/statistics',statistics)
app.use('/api/workers',worker)
app.use('/api/workers/region',workerByRegion)
app.use('/api/jobs',job)
app.use('/api/login',login)

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server run ${PORT}`)
})
