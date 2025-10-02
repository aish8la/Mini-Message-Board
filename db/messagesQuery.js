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

async function getMessageById(msg_id) {
    try {
        const res = await pool.query('SELECT * FROM message_board WHERE msg_id = $1', [msg_id]);
        return res.rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllMessages,
    createNewMessage,
    getMessageById,
};