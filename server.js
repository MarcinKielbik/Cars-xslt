const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serwowanie plików statycznych (HTML, XML, XSL)
app.use(express.static(path.join(__dirname, "public")));

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}/`);
});
