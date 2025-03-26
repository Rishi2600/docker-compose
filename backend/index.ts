import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hey there from the Backend")
})

app.listen(3000)