const express = require('express');

const app = express();
const port = 3001;

// GET endpoint
app.get('/', (req, res) => {
    res.send('This endpoint works.')
});

// GET enpoint
app.get('/squarenumber/:num', async (req, res) => {
    let x = req.params.num;
    res.json({'square':x*x});
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`);
});
