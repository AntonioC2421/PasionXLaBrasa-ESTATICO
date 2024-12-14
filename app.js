const express = require("express")
const app = express()

app.set("view engine", "ejs");

// Configura la carpeta 'public' como estática
app.use(express.static('public'));

app.get("/Ruta1", (req, res) => {
    res.render("index")
});

app.get("/Ruta2", (req, res) => {
    res.render("Menus")
});

app.listen(3000, (req, res) => {
    console.log('corriendo en el puerto 3000')
});