const { Router, request, response } = require('express');
const router = new Router();

// / will be replaced with /api/v1/operation in general routes
router.post('/', (request, response) => {
  //console.log(`CONTENT: ${JSON.stringify(request.body)}`);
  //response.json({"test": "value"});                                                                         

  // Extracts the body from request.
  // It contains the data sent by
  // client.
  const { body } = request
  response.send(body)
})


module.exports = router;




























