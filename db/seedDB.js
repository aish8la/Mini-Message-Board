const { Client } = require('pg');

const dbUrl = process.argv[2];

if(!dbUrl) {
    console.error("Please provide a database URL as an argument");
    process.exit(1);
};

const SQL = `CREATE TABLE IF NOT EXISTS message_board (
    msg_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 50 ),
    message TEXT,
    date_added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO message_board (username, message, date_added) 
VALUES
    ('alice', 'Hello everyone! Excited to join this board.', '2025-10-01 09:15:00+00'),
    ('bob', 'Does anyone know good PostgreSQL resources?', '2025-10-01 12:30:00+00'),
    ('charlie', 'Working on a Node.js project, loving it so far!', '2025-10-02 08:45:00+00'),
    ('diana', 'Reminder: Our group meeting is tomorrow at 3 PM.', '2025-10-02 14:10:00+00'),
    ('eric', 'Just deployed my first fullstack app', '2025-10-02 20:54:06+00'),
    ('fatima', 'Good luck with the exam everyone!', '2025-10-03 01:00:00+00');
`;

async function main() {
    const client = new Client({
        connectionString: dbUrl
    });

    try {
        await client.connect();
        console.log("Connected to Database successfully", dbUrl);
        console.log("Started Seeding....");
        await client.query(SQL);
        console.log("Done");
        process.exit(0);
    } catch (error) {
        console.error("Seeding Failed:", error);
        process.exit(1);
    }
};

main();