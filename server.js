const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars')

let PORT = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.urlencoded({extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.listen(PORT)
