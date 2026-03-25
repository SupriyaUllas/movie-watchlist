require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String,
    rating: String,
    plot: String,
    platform: String
});

const Movie = mongoose.model("Movie", movieSchema);

// Add Movie
app.post("/add", async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.send("Movie Added");
});

// Get Watchlist
app.get("/watchlist", async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

// Delete Movie
app.delete("/delete/:id", async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});