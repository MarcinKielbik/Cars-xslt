const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serving static files (HTML, XML, XSL)
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
