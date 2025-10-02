const pool = require('./pool');

async function getAllMessages() {
    try {
        const res = await pool.query('SELECT * FROM message_board');
        return res.rows;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllMessages,
};