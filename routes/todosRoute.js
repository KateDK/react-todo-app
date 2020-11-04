const express = require('express');

router = express.Router();
todosRoute = require('../controllers/todos');

router.get('/', todosRoute.todos);

module.exports = router;
