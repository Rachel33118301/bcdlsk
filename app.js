const express=require('express');
const app=express();
const morgan=require('morgan');
const travels = require('./api/controllers/travelers');

const mongoose=require('mongoose');
mongoose.connect(`mongodb+srv://Rachel_Travels:CM4Jiw2Ogcw7Slfq@cluster0.pr81cbn.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
mongoose.connection.on('connected',()=>{
    console.log('MCo77!');
});

const placesRoutes=require('./api/routes/places');
const travelsRoutes=require('./api/routes/travels');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Headers: Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization")
    res.header("Access-Control-Allow-Methods: POST, PUT, PATCH, GET, DELETE, OPTIONS")
    if(req.method==="OPTIONS")
    {
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
    
    next();
});


//עכשיו לא צריך אותו app.use((req,res,next)=>{
//     req.on('data',(chank)=>{
//         console.log(chank.toString());
//     });
//     req.on('end',()=>{
//         next();
//     });
// })

//Routes
app.use('/places',placesRoutes);
app.use('/travels',travelsRoutes);


app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports=app;