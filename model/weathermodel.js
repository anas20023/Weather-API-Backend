import axios from "axios";
import dotenv from 'dotenv'
dotenv.config();
const getdata= async(lat,ln)=>{
    //console.log(lat,ln);
    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${ln}?key=${process.env.WEATHER_API_KEY}`);
    const data = response.data;
    //console.log(data);
    return data;

}
export {getdata};