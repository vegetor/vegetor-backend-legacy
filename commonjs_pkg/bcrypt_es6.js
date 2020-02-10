const bcrypt = require('bcrypt');
bcrypt.saltRounds = 10;

module.exports = bcrypt;