const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/resume', (req, res) => {
  try {
    // Read data from the local JSON file
    const rawData = fs.readFileSync('/Users/kuliza-508/Desktop/Sid/Siddharth_AdvancedJavascript_gradedproj2/Data.json');
    const resumeData = JSON.parse(rawData);

    // Send the data as a JSON response
    res.json(resumeData);
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
