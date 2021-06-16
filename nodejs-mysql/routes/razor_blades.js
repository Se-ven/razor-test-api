const express = require('express');
const router = express.Router();

/* GET Razor Blades */
router.get('/razor_blades', function(req, res, next) {
    res.json({
        data: [
            {
                Manufacturer: 'Astra',
                Metallurgy: 'Platinum edge'
            }
        ],
        meta: {
            page: 1
        }
    });
});

module.exports = router;