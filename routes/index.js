const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) =>
{
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
//this connects all that's written in routes to the main server file through the route /api