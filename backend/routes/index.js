var express = require('express');
var router = express.Router();

module.exports = db => {
  
  /* GET Home Page. */
  router.get('/', function(req, res) {
    res.send('This is the home page')
  
  });

  /* GET Login. */
  router.get('/login', (req, res) => {
    res.send('This is the login route')

  });

  /* GET Register. */
  router.get('/register', (req, res) => {
    res.send('This is the register route')
  });

  /* GET Logout. */
  router.get('/logout', (req, res) => {
    res.send('This is the logout route')
  });

  /* GET Vehicles. */
  router.get('/vehicles', (req, res) => {
    res.send('This is the vehicles route')
  });

  /* GET Add Vehicle. */
  router.post('/vehicles/add_vehicle', (req, res) => {
    res.json('This is the add vehicle route')
  });

  /* GET Vehicle ID. */
  router.get('/vehicles/:vehicle_id', (req, res) => {
    const { vehicle_id } = req.params;
    const query = {
      text: 'SELECT * FROM makes where id = $1',
      values: [vehicle_id]
    };
    db
      .query(query)
      .then(result => res.json(result.rows))
      .catch(err => console.log(`Error getting data: ${err.message}`))
  });

  /* GET Delete Vehicle. */
  router.get('/vehicles/:vehicle_id/delete_vehicle', (req, res) => {
    res.send('This is the delete vehicle route')
  });

  /* GET Projects. */
  router.get('/vehicles/:vehicle_id/projects', (req, res) => {
    res.send('This is the projects route after selecting vehicle')
  });

  /* GET New Project. */
  router.get('/vehicles/:vehicle_id/projects/new_project', (req, res) => {
    res.send('This is the projects route to create new project')
  });

  /* GET New Project ID. */
  router.get('/vehicles/:vehicle_id/projects/:project_id', (req, res) => {
    res.send('This is the projects route after making new project')
  });

  /* GET Notes. */
  router.get('/vehicles/:vehicle_id/projects/:project_id/notes', (req, res) => {
    res.send('This is the project notes route')
  });

  /* GET Parts. */
  router.get('/vehicles/:vehicle_id/projects/:project_id/parts', (req, res) => {
    res.send('This is the project parts route')
  });

  /* GET Instructions. */
  router.get('/vehicles/:vehicle_id/projects/:project_id/instructions', (req, res) => {
    res.send('This is the project instructions route')
  });

  /* GET Videos. */
  router.get('/vehicles/:vehicle_id/projects/:project_id/videos', (req, res) => {
    res.send('This is the project video instructions route')
  });


  return router
};