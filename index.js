require('dotenv').config();
// import 'dotenv/config';
// import exp`ress from 'express';
const express = require('express');
const app = express();
const port = 3000;
const githubData = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/anime', (req, res) => {
    res.send('top 10 grossing anime of all time!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Welcome! to the official website of anime where u will find all the latest animes with dub as well as sub too!</h1>')
})

app.get('/yt', (req, res) => {
    res.send('<h3>Featuring animes on yt with latest updates! </h3>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env, () => {
    console.log(`example app listening on port ${port}`);
})