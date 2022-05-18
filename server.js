const express = require('express');
const drinks = require('./models/drinks');
const food = require('./models/food');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the GitPub app!')
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks, food})
})

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id]
    })
})

app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {
        foods: food[req.params.id]
    })
})

app.listen(port, () => {
    console.log("listening on port", port);
});