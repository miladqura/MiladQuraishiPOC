const express = require("express");
const path = require("path");
const foodDB = require("./foodDB");

const app = express();

// Allows the server to read JSON data.
app.use(express.json());

// Serves the files inside the public folder.
app.use(express.static(path.join(__dirname, "../public")));

// GET /foods returns all food items from the mock database.
app.get("/foods", (req, res) => {
    console.log("GET /foods request received");

    const foods = foodDB.getAll();

    console.log("Returning foods:", foods);
    res.status(200).json(foods);
});

// Handles requests for routes that do not exist.
app.use((req, res) => {
    console.log("404 Route Not Found:", req.url);

    res.status(404).json({
        error: "Route not found"
    });
});

// Uses the deployment port or port 3000 when running locally.
const PORT = process.env.PORT || 3000;

// Starts the server when this file is run directly.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Exports the app so Supertest can test it.
module.exports = app;  