const { Router } = require('express');
const router = new Router();
const { evaluate } = require('mathjs');

// / will be replaced with /api/v1/operation in general routes
router.post('/', (request, response) => {
  const { body } = request
  response.send(evaluate(body))
})


module.exports = router;




























