const winston = require('winston');

// Create a logger
const logger = winston.createLogger({
    level: 'info', // Log level
    format: winston.format.json(), // Log format
    transports: [
        // Console transport for logging to the console
        new winston.transports.Console(),
        // File transport for logging to a file
        new winston.transports.File({ filename: 'logfile.log' }),
    ],
});

let cust_details = [
    [
        "John", "Kate", "Ross", "Joseph", "Martha", "Davic", "Jim", "Dan", "Emma", "Elijah"
    ],
    [
        "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"
    ],
    [
        "Miami", "Los Angeles", "New York", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas"
    ]
]

for (const [index, firstname] of cust_details[0].entries()) {
    const lastname = cust_details[1][index];
    const city = cust_details[2][index];
    logger.info(firstname + " " + lastname + " " + city);
}

/**
 * This application will iterate through the cust_details array
 * where the first row contains first names, second row has last names,
 * and the third row includes the cities. 
 * It then combines the details and logs them using the Winston logger.
 * We have created the Winston logger, for info level logs. The transport parameter
 * is used to configure where the logs are printed.
 * The logs will be printed in the console and onto the file.
 */
