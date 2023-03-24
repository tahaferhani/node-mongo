const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/dbname");

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
    const users = User.find();
    res.send(users);
});

app.post("/users", (req, res) => {
    const user = new User(req.body);
    user.save();
    res.send({
        success: true,
        user
    });
});

app.listen(4000);
