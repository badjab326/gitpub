const express = require('express');
const drinks = require('./models/drinks');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the GitPub app!')
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks})
})


app.listen(port, () => {
    console.log("listening on port", port);
});