const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "files");

app.get("/files", (req, res) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "unable to locate the directory" });
    }
    res.json({
      files,
    });
  });
});

const filepath = path.join(directoryPath, "a.txt");

app.get("/files/a.txt", (req, res) => {
  fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read" });
    }
    res.json({
      data,
    });
  });
});

app.listen(1000);
