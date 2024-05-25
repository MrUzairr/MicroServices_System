const express = require('express');

const router = express.Router();
const orderController = require('../Controller/orderController');


// create a new product

router.post('/bookorder',orderController.stripePayment);
router.get('/getbookingsbyuserid',orderController.getOrderByID);
router.put('/cancelbooking',orderController.cancelOrder);
router.delete('/getallbookings',orderController.getAllOrders);


module.exports = router;