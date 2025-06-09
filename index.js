import express from "express"
import dotenv from 'dotenv'
import {weatherapi} from "./routes/weatherroutes.js"
 import cors from "cors";
dotenv.config();
const PORT=process.env.PORT||5000;
const app = express();
// app.use(cors({
//     origin: ['http://localhost:5173/', 'https://www.anasibnbelal.live/', 'https://weather.anasibnbelal.live/']
// }));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ response: "Hello World" })
})
app.post("/api/getweather",weatherapi);
app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
})      