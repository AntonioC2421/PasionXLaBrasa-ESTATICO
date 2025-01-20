const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

app.set("view engine", "ejs");
app.use(expressLayouts); // Usar middleware de layouts
app.set("layout", "layouts/LayoutMain"); // Definir layout principal

// Configura la carpeta 'public' como estática
app.use(express.static('public'));

app.get("/Home", (req, res) => {
    res.render("index")
});

app.get("/Nosotros", (req, res) => {
    res.render("Nosotros")
});

app.get("/Carta", (req, res) => {
    res.render("Cartas")
});

app.get("/Promociones", (req, res) => {
    res.render("Promociones")
});

app.get("/Ubicanos", (req, res) => {
    res.render("Ubicacion")
});

app.listen(3000, (req, res) => {
    console.log('corriendo en el puerto 3000')
});