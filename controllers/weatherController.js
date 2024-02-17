const axios = require("axios");

const getweatherReport = async(req,res)=>{
  res.render('weatherindex',{weather : null});
};

const sendweatherReport = async(req,res)=>{
    
    try{
        const  { city_name } = req.body;

        const apikey = '93d1bfbccb564b7a9b8191416241201';
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city_name}`;
        const result = await axios.get(apiUrl);
        
       // console.log(apiUrl);
        const weather ={
            name: result.data.location.name,
            region: result.data.location.region,
            country: result.data.location.country,
            temp: result.data.current.temp_c
        }

        res.render('weatherindex',{ weather });

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

module.exports = {
    getweatherReport,
    sendweatherReport
};