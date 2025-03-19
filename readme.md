# Cars-XSLT

## Description
Cars-XSLT is a simple project demonstrating the use of **XML**, **XSLT**, and **JavaScript** for transforming and displaying structured data in a web application. The project also includes a basic **Node.js Express server** for serving static files.

## Features
- Loads an XML file containing car data.
- Uses XSLT to transform XML into a readable HTML table.
- Implements JavaScript to handle the transformation process.
- Provides a simple Express-based backend for serving files.

## Project Structure
```
/cars-xslt
│-- /public
│   ├── index.html       # Main webpage
│   ├── app.js          # JavaScript for XSLT transformation
│   ├── cars.xml        # XML data file
│   ├── cars.xsl        # XSLT stylesheet for transformation
│-- server.js           # Node.js server for serving static files
│-- package.json        # Project dependencies and scripts
│-- README.md           # Project documentation
```

## Installation
### Prerequisites
Ensure you have **Node.js** installed. Check by running:
```sh
node -v
```
If not installed, download it from [https://nodejs.org/](https://nodejs.org/).

### Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/cars-xslt.git
   cd cars-xslt
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project
### Start the Server
To start the Express server, run:
```sh
node server.js
```

Alternatively, if you have **nodemon** installed:
```sh
nodemon server.js
```

### View in Browser
Once the server is running, open:
```
http://localhost:3000/
```
