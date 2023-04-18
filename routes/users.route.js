const express = require('express')
const users = require('../controllers/user.Database.controller')
const app = express.Router()
app.use(express.json()); // take care of this mother fucker ,needed for req.body or you will get undefined


/**
 * for POST url/users
 */
app.post('/', users.CreateUser);

/**
 * will return all users 
 * for GET url/users
 */
app.get("/", users.getAllUsers);

/** 
 * will return one user by its id
 * for GET url/users/:id
 */
app.get("/:id", users.getUser_id);

/**
 * for PUT url/users/:id
 */
app.put("/:id", users.updateUser);
    
/**
 * for DELETE url/users/<id>
 */
app.delete("/:id", users.deleteUser);

/**
 * for DELETE url/users
 */
app.delete("/", users.deleteAllUser);

module.exports = app;


/**
 * URL parameter REMIND

app.get('/p/:tagId', function(req, res) {
  res.send("tagId is set to " + req.param("tagId"));
});

// GET /p/5
// tagId is set to 5

Query parameter

app.get('/p', function(req, res) {
  res.send("tagId is set to " + req.query("tagId"));
});

// GET /p?tagId=5
// tagId is set to 5

 */