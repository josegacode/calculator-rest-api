const { Router, json } = require('express');
const router = new Router();
const { evaluate } = require('mathjs');

// / will be replaced with /api/v1/operation in general routes
router.post('/', (request, response) => {
  const { body } = request
  let jsonResponse = {
    result: '',
    status: '200'
  }

  jsonResponse.result = evaluate(body.expression);
  response.send(jsonResponse);
})

module.exports = router;




























