const mysql = require('mysql2');
const {
    SOMETHING_WENT_WRONG
} = require('../utils/message');

module.exports.connectDb = () => {
    try {
        const db = mysql.createConnection({
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
            port: process.env.db_port,
            host: process.env.host
        })
        db.connect((err) => {
            if (err) {
                const error = { ...err }
                error.message = error.message || SOMETHING_WENT_WRONG;
                errorMessage.bind(err)
            } else {
                global.db = db;
                console.log('DB connected Successfully');
            }
        })
    } catch (error) {
        const err = { ...error }
        err.message = err.message || SOMETHING_WENT_WRONG;
        errorMessage.bind(err);
    }
}

function errorMessage() {
    console.log(this.message)
    process.exit(1);
}