const express = require('express');
const people = require('./peopleRoute.js');
const courses = require('./coursesRoute.js');
const categories = require('./categoriesRoute.js');

module.exports = (app) => {
  app.use(express.json(), people, categories, courses);
};
