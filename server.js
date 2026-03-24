const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://127.0.0.1:27017/moviewatchlist")
.then(() => console.log("MongoDB Connected"))
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

app.listen(3000, () => {
    console.log("Server running on port 3000");
});