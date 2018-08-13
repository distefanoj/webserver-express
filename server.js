const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));




//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Inicio',

    });
});

app.get('/about', function(req, res) {

    res.render('about', {


    });
});
app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
})