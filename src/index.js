const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.port || 3000;
const static_path = path.join(__dirname, '../views');
const partial_path = path.join(__dirname, '../views/partials');

app.set('view engine', 'hbs');
app.set('views', static_path);
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
hbs.registerPartials(partial_path);

app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
hbs.registerPartials(partial_path);

app.get('/', (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});