'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/names')
    .get(todoList.list_all_names)
    .post(todoList.create_a_name);


  app.route('/names/:nameId')
    .get(todoList.read_a_name)
    .put(todoList.update_a_name)
    .delete(todoList.delete_a_name);
};