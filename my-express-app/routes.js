const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from router! the message is from router.....');
});


//  router.get('/', (req, res) => {
//    res.json({name: "vijay",

//    });
//  });

router.get('/',function(req,res)
{
    res.sendFile(__dirname + "/" + "index.html");
});

router.get('/youtube', function(req,res)
{
    res.redirect('https://www.youtube.com/');
});

router.get('/google', function(req,res)
{
    res.redirect('/https://www.google.com/');
});




// // POST request handler
// app.post('/process', (req, res) => {
//   // Extracting values from JSON
//   const { name, age } = req.body;

//   // Logging values
//   console.log(`Name: ${name}, Age: ${age}`);

//   // Sending response
//   res.json({ message: 'Data received successfully' });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


module.exports = router;
