const pool = require('./pool');

async function getAllMessages() {
    try {
        const res = await pool.query('SELECT * FROM message_board');
        return res.rows;
    } catch (error) {
        throw error;
    }
};

async function createNewMessage(username, message) {
    try {
        const res = await pool.query(`INSERT INTO message_board (username, message) 
            VALUES ($1, $2)`, [username, message]);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllMessages,
    createNewMessage,
};