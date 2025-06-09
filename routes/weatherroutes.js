import { getdata } from "../model/weathermodel.js";

const weatherapi = async (req, res) => {
    try {
        const { lat, ln } = req.body;
        if (!lat || !ln) {
            return res.status(400).json({ error: "Latitude and longitude are required" });
        }
        const resp = await getdata(lat, ln);
        return res.status(200).json(resp);
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        return res.status(500).json({ error: "Failed to fetch weather data" });
    }
};

export { weatherapi };