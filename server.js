const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Create data directory if it doesn't exist
app.post('/create-data-directory', async (req, res) => {
  try {
    await fs.mkdir('data', { recursive: true });
    res.status(200).send('Data directory created');
  } catch (error) {
    console.error('Error creating data directory:', error);
    res.status(500).send('Error creating data directory');
  }
});

// Save CSV file
app.post('/save-csv', async (req, res) => {
  try {
    const { filename, content } = req.body;
    
    // Ensure the filename is safe and within the data directory
    const safePath = path.join('data', path.basename(filename));
    
    await fs.writeFile(safePath, content, 'utf8');
    res.status(200).send('File saved successfully');
  } catch (error) {
    console.error('Error saving file:', error);
    res.status(500).send('Error saving file');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 