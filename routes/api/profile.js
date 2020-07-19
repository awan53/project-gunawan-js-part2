const express = require('express');
const router = express.Router();

//@route GET api/profile
// @desc test route
// @access public atau private

router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;