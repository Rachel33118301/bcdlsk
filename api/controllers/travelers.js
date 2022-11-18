const mongoose = require('mongoose');
const Travel = require('../models/travels');

module.exports = {

  
getAllTravels: (req, res) => {
    Travel.find().then((travel) => {
        res.status(200).json({
            travel
        })
    }).catch(error => {
        res.status(500).json({
            error
        })
    });

},


    creatTravel: (req, res) => {
        const { img, name } = req.body;

        const travel = new Travel({
            _id: new mongoose.Types.ObjectId(),
            img,
            name
        });

        travel.save().then(() => {
            res.status(200).json({
                message: 'Creaete travel'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })

        });
    },
    getTravelById: (req, res) => {
        const TravelId = req.params.TravelId
        Travel.findById(TravelId).then((travel) => {
            res.status(200).json({
                travel
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    
    },
    getTravelByArrayOfIds: async(req, res) => {
        var arr=[],TravelsArr=[]
        const TravelArrayOfIds = req.params.TravelArrayOfIds
        console.log(TravelArrayOfIds)
        var result = TravelArrayOfIds.slice(1,-1);
        console.log("pop",result)
        arr = result.split(",")
        console.log("arr:",arr[1])
        // Travel.findById(TravelId).then((travel) => {
        //     res.status(200).json({
        //         travel
        //     })
        // }).catch(error => {
        //     res.status(500).json({
        //         error
        //     })
        // });
        
        // arr.forEach(e=>{
        //     Travel.findById(e).then((bcd)=>{
        //         arr.push(bcd);
        //     })
            
        // }).catch(error => {
        //     res.status(500).json({
        //         error
        //     })
        // });
        // res.status(200).json({
        //     arr
        // }).catch(error => {
        //     res.status(500).json({
        //         error
        //     })
        // });
        var leep
        // for(const bcdlsk in arr){
        //     arr[bcdlsk].toString()
        //     leep=arr[bcdlsk].replace(" ", "")
        //     Travel.findById(leep).then((bcd)=>{
        //         TravelsArr.push(bcd);
        //         console.log("bcdlskarray:",bcd);
        // })
        // }
        arr.forEach((bcdlsk)=>{
             bcdlsk.toString()
            leep=bcdlsk.replace(" ", "")
            Travel.findById(leep).then((bcd)=>{
            TravelsArr.push(bcd);
            console.log("bcdlskarray:",bcd);
        })
        })
        arr.forEach(async (bcdlsk) => {
            // each element takes a different amount of time to complete
            bcdlsk.toString()
            leep=bcdlsk.replace(" ", "")
            await sleep(10);
            Travel.findById(leep).then((bcd)=>{
                TravelsArr.push(bcd);
                console.log("bcdlskarray:",bcd);
            })
            console.log(bcdlsk);
        });
        console.log("ijo",TravelsArr)
        await  res.status(200).json({
                TravelsArr
            })
    }
}


