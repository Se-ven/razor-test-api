const express = require('express');
const router = express.Router();

/* GET Razor Blades */
router.get('/razor_handles', function(req, res, next) {
    res.json({
        data: [
            {
                Manufacturer: 'Muhle',
                Model: 'R41',
                Style: 'Open Comb'
            }
        ],
        meta: {
            page: 1
        }
    });
});

module.exports = router;