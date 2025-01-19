import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the FRC GitHub Copilot Extension!");
});

const port = Number(process.env.PORT || "3000");
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
