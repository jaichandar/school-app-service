const { error, success } = require('../map');
class Users {
    async login (req, res) {
        try {  
            success(req, res, []);
        } catch (error) {
            error(req, res, { error: '' });
        }
    }

    async Register (req, res) {
        try {
            success(req, res, []);
        } catch (error) {
            error(req, res, { error: '' });
        }
    }
}

const instance = new Users();
module.exports = instance;