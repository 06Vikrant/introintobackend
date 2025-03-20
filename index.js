require('dotenv').config;
// import express from 'express';
const express = require('express');
const app = express();
const port = 3000;

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

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`);
})