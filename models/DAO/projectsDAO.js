module.exports = function(db, url) {
  var module = {};

  // Create new project
  module.create = function(project, callback) {

  };

  // Retrieve projects (all of them or one in particular)
  module.getAll = function(callback) {
    db.connect(url, function(err, client, done) {
      var queryString = 'SELECT * FROM project';
      client.query(queryString, function(err, result) {
        done();
        if (err) {
          console.error(err);
          callback.fail(err);
        }
        else {
          callback.success(result);
        }
      });
    });
  };

  module.getById = function(id, callback) {
    db.connect(url, function(err, client, done) {
      var queryString = 'SELECT * FROM project WHERE id = $1';
      client.query(queryString, [id], function(err, result) {
        done();
        if (err) {
          console.error(err);
          callback.fail(err);
        }
        else {
          callback.success(result);
        }
      });
    });
  };

  // Update a project
  module.update = function(project, callback) {

  };

  // Delete a project
  module.delete = function(id, callback) {

  }

  return module;
};
