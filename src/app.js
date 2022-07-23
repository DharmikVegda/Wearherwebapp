const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 500;


// public static path
const static_path = path.join(__dirname,'../public');
app.use(express.static(static_path));

app.set('view engine','hbs');



//routing
app.get('/',(req,res) => {
    res.render('index');
})
app.get('/about',(req,res) => {
    res.render('about');
})
app.get('/weather',(req,res) => {
    res.render('weather');
})
app.get('*',(req,res) => {
    res.send('oops! 404 page not found');
})

app.listen(port, () => {
    console.log(`listning to the port number ${port}`)
})
