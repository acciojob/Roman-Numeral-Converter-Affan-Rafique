// index.js
const express = require("express");
const app = express();
app.use(express.json());

// Define function BEFORE using it
function convertToRoman(num) {
  const map = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];
  let result = "";
  for (let i of map) {
    while (num >= i.value) {
      result += i.numeral;
      num -= i.value;
    }
  }
  return result;
}

// Route
app.post("/romanConverter", (req, res) => {
  const { input } = req.body;
  const roman = convertToRoman(input);   // ✅ function is available
  res.json({ roman });
});

app.listen(3000, () => console.log("Server running on port 3000"));

   