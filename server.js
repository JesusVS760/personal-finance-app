import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 5000;

/// Cross- Origin Resource
app.use(cors());

app.use(express.json());

app.post("/data.json", (req, res) => {
  const newPot = req.body;

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading the file" });
    }
    // Parse the existing JSON data
    const pots = JSON.parse(data || "[]");
    //Add the new pot
    pots.push(newPot);

    // Write the updated data back tot he file

    fs.writeFile("data.json", JSON.stringify(pots, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error writing to the file" });
      }
      res.status(200).json({ message: "Pot added successfully" });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
