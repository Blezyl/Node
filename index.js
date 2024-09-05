import express from 'express';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Root route to handle GET requests to '/'
app.get('/', (req, res) => {
  res.status(200).send('Welcome to my server.');
});

// Route for first name in all caps
app.get('/firstname', (req, res) => {
  res.status(200).send('BLEZYL');
});

// Route for last name in all caps
app.get('/lastname', (req, res) => {
  res.status(200).send('YBANEZ');
});

// Route for age
app.get('/age', (req, res) => {
  res.status(200).send('20');  // Replace 20 with your actual age
});

// Route for school email
app.get('/schoolemail', (req, res) => {
  res.status(200).send('ybanezblezyl@mail.com');  // Replace with your actual school email
});

// Route for returning all data as JSON
app.get('/mydata', (req, res) => {
  const data = {
    first_name: 'BLEZYL',
    last_name: 'YBANEZ',
    age: 20,  // Replace with your actual age
    school_email: 'ybanezblezyl@mail.com'  // Replace with your actual school email
  };
  res.status(200).json(data);
});

// Port settings (default to 3333 if not set in environment)
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
