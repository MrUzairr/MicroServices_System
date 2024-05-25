const express = require("express");
const database = require("../NodeApis/Utils/db");
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require("path");  // Import the path module
const usersRoute = require("../NodeApis/Route/userRoute");
const productsRoute = require("../NodeApis/Route/productRoute");
const ordersRoute = require("../NodeApis/Route/orderRoute");
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(bodyParser.json());

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend URL
  credentials: true, // Allow cookies and authorization headers
}));

app.options('*', cors()); 

app.use("/api", usersRoute);
app.use("/product-api", productsRoute);
app.use("/order-api", ordersRoute);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// Example endpoint for Node.js API
app.get('/', (req, res) => {
  res.send('This is a Node.js API endpoint');
});

// Proxy endpoint to Python API
app.get('/py', async (req, res) => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/app_py/getbooks');
    res.send(response.data);
  } catch (error) {
    console.error('Error communicating with Python API:', error.message);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
