const { Router } = require('express');
const router = new Router();

// / will be replaced with /api/v1/operation in general routes
router.post('/', (request, response) => {
  const { body } = request
  response.send(body)
})


module.exports = router;




























