const express = require('express');
const router = express.Router();

//@route GET api/post
// @desc test route
// @access public atau private

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;