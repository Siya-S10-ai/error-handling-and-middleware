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
    ],
    // Below we have different set of data.
    [
        "GK", "CB", "CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST"
    ],
    [
        "Joan", "Cubarsi", "Christiansen", "Eric", "Balde", "Rodri", "Pedri", "Fermin", "Lamine", "Adeyemi", "Raphina"
    ],
    [
        "Rating", "Rating", "Rating", "Rating","Rating", "Rating", "Rating", "Rating", "Rating", "Rating", "Rating"
    ],
    [
        90, 90, 85, 87, 86, 94, 93, 89, 92, 88, 91
    ]
]

for (const [index, position] of cust_details[3].entries()) {
    const name = cust_details[4][index];
    const rating = cust_details[5][index];
    const ratingValue = cust_details[6][index];
    logger.info(position + " " + name + " " + rating + " " + ratingValue);
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
