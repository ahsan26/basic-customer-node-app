const Customer = require('../Models/Customer');

module.exports = {
    addCustomer: async function (req, res) {
        const { firstName, lastName, email } = req.body;
        console.log(req.body)
        let newCustomer = new Customer({ firstName, lastName, email });
        newCustomer.save(function (err) {
            if (err) return res.status(400).json({ status: false, err });
            res.status(200).json({ status: true });
        });
    },
    getCustomers: async function (req, res) {
        Customer.find(function (err, data) {
            if (err) return res.status(400).json({ status: false, err });
            res.json({ status: true, data })
        });
    },
    removeCustomer: function (req, res) {
        Customer.findByIdAndRemove(req.query.id, function (err) {
            if (err) return res.status(400).json({ status: false, err });
            res.status(200).json({ status: true });
        });
    }
};