const path = require("path");
const express = require("express");
const hbs = require("hbs");
const getMovies = require("./utils/movie");

const app = express();
const port = process.env.PORT || 3001;

// Define paths for Express config
const publicDirectory = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./views");

// Setup static directory and view locations
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectory));

// Render the index page
app.get("/", (req, res) => {
    res.render("index"); // Ensure views/index.hbs exists
});

// Movie API endpoint
app.get("/movie", (req, res) => {
    if (!req.query.search) {
        res.send({ error: "Something went wrong" });
        return;
    }

    getMovies(req.query.search, (error, data) => {
        if (error) {
            res.send({ error: "Something went wrong" });
            return;
        }

        res.send(data);
    });
});

// Start the server
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
