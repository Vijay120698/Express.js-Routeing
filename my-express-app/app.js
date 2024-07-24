const express = require('express');
const app = express();
const port = 3000; // or any port number you prefer

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!..... hay iam vijay ');
});


// GET request to /about
app.get('/about', (req, res) => {
    res.send('About page');
  });
  
  // POST request to /submit
  app.post('/submit', (req, res) => {
    res.send('Form submitted');
  });
  
  // PUT request to /user
  app.put('/user', (req, res) => {
    res.send('User updated');
  });
  
  // DELETE request to /user
  app.delete('/user', (req, res) => {
    res.send('User deleted');
  });
  
  // Route with a parameter
app.get('/users/:userId', (req, res) => {
    res.send(`User ID: ${req.params.userId}`);
  });
  
  app.get('/Multi', (req, res) => {               //multipla tag
    res.write("<h1> Welcome to about page </h1>");
    res.write("<h1> Welcome to about page </h1>");
    res.send()
});
  
  const routes = require('./routes');
  const login = require("./login")
  app.use('/route', routes);

//   const routes = require('./login');
  app.use('/login', login);
  
  app.get('/value', (req, res) => {
    res.json([{firstName : 'vijay',
              lastName: 'vincent'},
              {firstName : 'sijo',
               lastName: 'kumar'
    }]);

});
 


 app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
