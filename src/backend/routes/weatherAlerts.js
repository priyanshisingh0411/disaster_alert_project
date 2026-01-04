import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/alerts", async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`
    );

    const data = await response.json();

    res.json({
      alerts: data.alerts || [],
      location: { lat, lon },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather alerts" });
  }
});

export default router;
