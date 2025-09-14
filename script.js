const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Roman numeral converter function
function toRoman(num) {
  if (num === 0) return "N"; // Romans used "N" for zero

  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";

  for (let [roman, value] of symbols) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// API endpoint
app.post("/romanConverter", (req, res) => {
  const { input } = req.body;

  if (typeof input !== "number" || input < 0 || input > 100000) {
    return res.status(400).json({ error: "Input must be a number between 0 and 100000" });
  }

  const roman = toRoman(input);
  res.json({ roman });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
