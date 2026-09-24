const express = require('express');

const app = express();
const port = 3001;

// GET endpoint
app.get('/', (req, res) => {
    res.send('This endpoint works.')
});

// GET enpoint
app.get('/squarenumber/:num', async (req, res, next) => {
    let x = req.params.num;
    if (isNaN(x)) {
        next( new Error("Input is not a number"));
    }
    res.json({'square':x*x});
});

app.use((err, req, res, next) => {
    // Set fefault values for status code and status if not provided in the error object
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'Error';

    // Log the error stack to the console for debugging purposes
    console.log(err.stack);

    // Send a JSON response with formatted error details
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`);
});
