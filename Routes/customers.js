const express = require('express');
const router = express.Router();
const { addCustomer, getCustomers, removeCustomer } = require('../Controllers/Customer');

router.route('/add').post(addCustomer);
router.route('/').get(getCustomers);
router.route('/remove').delete(removeCustomer);

module.exports = router;