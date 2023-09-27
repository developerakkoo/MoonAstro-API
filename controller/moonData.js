const mData =  require('../models/mData.model');
const axios = require('axios');
const moment = require('moment');


// console.log(moment().subtract(24, 'month').format('DD/MM/YYYY'))



async function  insertData (req, res) {
    try {
        let month = 12
        let data = JSON.stringify({
            "year": 2022,
            "month": month,
            "date": parseInt(req.query.date),
            "hours": 9,
            "minutes": 30,
            "seconds": 0,
            "latitude": 18.5045902,
            "longitude":73.7654297,
            "timezone": 5.5,
            "settings": {
            "observation_point": "topocentric",
            "ayanamsha": "lahiri"
            }
        });
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://json.freeastrologyapi.com/planets',
            headers: { 
            'x-api-key': 'WbgpupILSf9GifXwzmwJI31pyr6RotarjGiLpiE3', 
            'Content-Type': 'application/json'
            },
            data : data
        };
        
        axios.request(config)
        .then(async(response) => {
            const planet = response.data.output[0]['2']
            // console.log(planet);
        const moonData ={
            current_sign:planet.current_sign,
            fullDegree:planet.fullDegree,
            normDegree:planet.normDegree,
            year : response.data.input.year,
            month :response.data.input.month,
            date:`${response.data.input.date}-${response.data.input.month}-${response.data.input.year}`
        }
        const insertedData = await mData.create(moonData)
        return res.status(200).json({message: 'Data Fetched Successfully', data:insertedData});
        })
        .catch((error) => {
            console.log(error.response.data);
        return res.status(200).json({message: 'No Data Found'});
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message, status:'error'});
        
    }
    }

async function getDataByDate(req,res){
    try {
    const pipeline = [
            {
                '$match': {
                'date': req.query.date
            }
            }
        ]
        const savedData = await mData.aggregate(pipeline);
        if (savedData.length == 0) {
        return res.status(404).json({message: 'Data Not Found'});
        }
        const temp = savedData[0].fullDegree
        const degree = temp.toString().split('.')[0]
        // console.log(degree);
        
            if (degree >= 0 && degree <= 13  ) {
                let postRe ={
                    Nakshatra : "ASHWINI",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 13 && degree <= 26  ) {
                let postRe ={
                    Nakshatra : "BHARANI",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }

            if (degree >= 29 && degree <= 42  ) {
                let postRe ={
                    Nakshatra : "KRITTIKA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 42 && degree <= 55  ) {
                let postRe ={
                    Nakshatra : "ROHINI",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        

            if (degree >= 55 && degree <= 68  ) {
                let postRe ={
                    Nakshatra : "MRIGASHIRSHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 60 && degree <= 81  ) {
                let postRe ={
                    Nakshatra : "ARDRA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
        
            if (degree >= 81 && degree <= 94  ) {
                let postRe ={
                    Nakshatra : "PUNARVASU",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 94 && degree <= 107  ) {
                let postRe ={
                    Nakshatra : "PUSHYA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 107 && degree <= 120  ) {
                let postRe ={
                    Nakshatra : "ASHLESHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
            if (degree >= 120 && degree <= 133  ) {
                let postRe ={
                    Nakshatra : "MAGHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >=133 && degree <= 146  ) {
                let postRe ={
                    Nakshatra : "PURVA PHALGUNI",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
            if (degree >= 146 && degree <= 159  ) {
                let postRe ={
                    Nakshatra : "UTTARA PHALGUNI",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 159 && degree <= 172  ) {
                let postRe ={
                    Nakshatra : "HASTA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
        
            if (degree >= 172 && degree <= 185  ) {
                let postRe ={
                    Nakshatra : "CHITRA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 185 && degree <= 198  ) {
                let postRe ={
                    Nakshatra : "SWATI",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 198 && degree <= 211  ) {
                let postRe ={
                    Nakshatra : "VISHAKHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
            if (degree >= 211 && degree <= 224  ) {
                let postRe ={
                    Nakshatra : "ANURADHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 224 && degree <= 237  ) {
                let postRe ={
                    Nakshatra : "JYESHTHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
            if (degree >= 237 && degree <= 250  ) {
                let postRe ={
                    Nakshatra : "MULA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 250 && degree <= 263  ) {
                let postRe ={
                    Nakshatra : "PURVA ASHADHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }

            if (degree >= 263 && degree <= 276  ) {
                let postRe ={
                    Nakshatra : "UTTARA ASHADHA",
                    current_sign:savedData[0].current_sign, 
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 276 && degree <= 289  ) {
                let postRe ={
                    Nakshatra : "SHRAVANA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 289 && degree <= 295  ) {
                let postRe ={
                    Nakshatra : "DHANISHTHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
        
            if (degree >= 295 && degree <= 301  ) {
                let postRe ={
                    Nakshatra : "DHANISHTHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 301 && degree <= 314  ) {
                let postRe ={
                    Nakshatra : "SHATABHISHA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 314 && degree <= 327  ) {
                let postRe ={
                    Nakshatra : "PURVA BHADRAPADA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
        
            if (degree >= 327 && degree <= 340  ) {
                let postRe ={
                    Nakshatra : "UTTARA BHADRAPADA",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
            if (degree >= 340 && degree <= 360  ) {
                let postRe ={
                    Nakshatra : "REVATI",
                    current_sign:savedData[0].current_sign,
                    moonDegree:degree,
                    date:savedData[0].date
                }
                return res.status(200).json({message: 'Data Fetched Successfully', data:postRe});
            }
        
    } catch (error) {
        return res.status(500).json({message: error.message, status:'error'});
        
    }
}

async function getDataByMonth(req,res){
    try {
        const metaData = []
    const pipeline = [
        {
            '$match': {
            'month': req.query.month
            }
        }
    ]
        const savedData = await mData.aggregate(pipeline);
        if (savedData.length == 0) {
            return res.status(404).json({message: 'Data Not Found'});
            }
            savedData.forEach(element => {
                const temp = element.fullDegree
                const degree = temp.toString().split('.')[0]
                if (degree >= 0 && degree <= 13  ) {
                    metaData.push({
                        Nakshatra : "ASHWINI",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 13 && degree <= 26  ) {
                    metaData.push({
                        Nakshatra : "BHARANI",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
    
                if (degree >= 29 && degree <= 42  ) {
                    metaData.push({
                        Nakshatra : "KRITTIKA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 42 && degree <= 55  ) {
                    metaData.push({
                        Nakshatra : "ROHINI",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
    
                if (degree >= 55 && degree <= 68  ) {
                    metaData.push({
                        Nakshatra : "MRIGASHIRSHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 60 && degree <= 81  ) {
                    metaData.push({
                        Nakshatra : "ARDRA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
            
                if (degree >= 81 && degree <= 94  ) {
                    metaData.push({
                        Nakshatra : "PUNARVASU",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 94 && degree <= 107  ) {
                    metaData.push({
                        Nakshatra : "PUSHYA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 107 && degree <= 120  ) {
                    metaData.push({
                        Nakshatra : "ASHLESHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
                if (degree >= 120 && degree <= 133  ) {
                    metaData.push({
                        Nakshatra : "MAGHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >=133 && degree <= 146  ) {
                    metaData.push({
                        Nakshatra : "PURVA PHALGUNI",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
                if (degree >= 146 && degree <= 159  ) {
                    metaData.push({
                        Nakshatra : "UTTARA PHALGUNI",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 159 && degree <= 172  ) {
                    metaData.push({
                        Nakshatra : "HASTA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
            
                if (degree >= 172 && degree <= 185  ) {
                    metaData.push({
                        Nakshatra : "CHITRA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 185 && degree <= 198  ) {
                    metaData.push({
                        Nakshatra : "SWATI",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 198 && degree <= 211  ) {
                    metaData.push({
                        Nakshatra : "VISHAKHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
                if (degree >= 211 && degree <= 224  ) {
                    metaData.push({
                        Nakshatra : "ANURADHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 224 && degree <= 237  ) {
                    metaData.push({
                        Nakshatra : "JYESHTHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
                if (degree >= 237 && degree <= 250  ) {
                    metaData.push({
                        Nakshatra : "MULA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 250 && degree <= 263  ) {
                    metaData.push({
                        Nakshatra : "PURVA ASHADHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
    
                if (degree >= 263 && degree <= 276  ) {
                    metaData.push({
                        Nakshatra : "UTTARA ASHADHA",
                        current_sign:element.current_sign, 
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 276 && degree <= 289  ) {
                    metaData.push({
                        Nakshatra : "SHRAVANA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:savedData[0].date
                    })
                }
                if (degree >= 289 && degree <= 295  ) {
                    metaData.push({
                        Nakshatra : "DHANISHTHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
            
                if (degree >= 295 && degree <= 301  ) {
                    metaData.push({
                        Nakshatra : "DHANISHTHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 301 && degree <= 314  ) {
                    metaData.push({
                        Nakshatra : "SHATABHISHA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 314 && degree <= 327  ) {
                    metaData.push({
                        Nakshatra : "PURVA BHADRAPADA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
            
            
                if (degree >= 327 && degree <= 340  ) {
                    metaData.push({
                        Nakshatra : "UTTARA BHADRAPADA",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (degree >= 340 && degree <= 360  ) {
                    metaData.push({
                        Nakshatra : "REVATI",
                        current_sign:element.current_sign,
                        moonDegree:degree,
                        date:element.date
                    })
                }
                if (savedData.length == metaData.length) {
                    res.status(200).json({message: 'Data Fetched Successfully', count:metaData.length,data:metaData});
                }
            });
    } catch (error) {
        return res.status(500).json({message: error.message, status:'error'});
        
    }
}


async function getAllData(req,res){
    try {
        const savedData = await mData.find();
        if (savedData.length == 0) {
            return res.status(404).json({message: 'Data Not Found'});
            }
        res.status(200).json({message: 'Data Fetched Successfully', count:savedData.length,data:savedData});
    } catch (error) {
        return res.status(500).json({message: error.message, status:'error'});
        
    }
}

module.exports={
    insertData,
    getDataByDate,
    getDataByMonth,
    getAllData
}