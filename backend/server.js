const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    const cards = [
        { id: 1, question: "A branch of math that involves expressions with variables.", answer: "Algebra" },
        { id: 2, question: "A branch of mathematics that involves expressions with variables.", answer: "Algebra" },
        { id: 3, question: "A branch of mathematics that involves expressions with variables.", answer: "Algebra" },
    ]
    console.log("Sending cards")
    res.status(200).json({ "error": false, data: cards })
})


app.post("/add-flashcard", (req, res) => {
    const { question, answer } = req.body;
    console.log(question, answer)
    res.send("Done processing")
})

app.listen(port, () => {
    console.log("Server is running on port:", port)
})