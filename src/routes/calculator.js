const { Router, request, response } = require('express');
const router = new Router();

// / will be replaced with /api/movies in general routes
router.get('/', (request, response) => {
  response.json({"test": "value"});                                                                         
})

// Post creates a new resources
router.post('/', (request, response) => {
  const id = movies.length + 1;
  const { title, director, year, rating } = request.body;
  const newMovie = { ...request.body, id };
  if(id && title && director && year && rating) {
    movies.push(newMovie);
    response.status(200).json(movies);
  } else {
    response.status(500).json( { error: `Some attribute isn't present` } )
  }
})


// PUT updates a specific resource
router.put('/:id', (request, response) => {
  const { id } = request.params;
  const { title, director, year, rating } = request.body;
  if(id && title && director && year && rating) {
    movies.forEach((movie) => {
      if(id == movie.id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
        response.status(200).json(movies);
      }
    });
  } else {
    response.status(500).json( { error: `Some attribute isn't present` } )
  }
})

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  if(id) {
    const movieIndex = movies.findIndex(movie => movie.id == id);
    movies.splice(movieIndex, 1);
    response.status(200).json(movies);
  } else {
    response.status(500).json({ 'error': `There isn't id present in the request` });
  }
})

module.exports = router;




























