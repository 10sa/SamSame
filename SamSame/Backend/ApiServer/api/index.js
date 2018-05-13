const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Responsed!');
});

module.exports = router;