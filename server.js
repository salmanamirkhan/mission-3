const express = require("express");

const app = express();

app.use(express.json());

function toString(words) {
  return JSON.stringify(words);
}

let counter = 1;

function wordCounter(data) {
  let words = data.split(/\s/);

  for (let i = 0; i < words.length; i++) {
    if (
      words[i].includes("crash" || "collide" || "scratch" || "bump" || "smash")
    ) {
      counter++;
    }
    if (counter === 5) {
      break;
    }
  }

  return `${counter}`;
}

app.get('/' (req,res) => {
  res.send('Welcome to the home page')
})

app.post("/api", (req, res) => {
  wordCounter(toString(req.body));
  res.send(`your risk raiting is ${counter}`);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
