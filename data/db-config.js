const knex = require("knex");

const config = require("../knexfile.js");

// select dev object from knexfile
const db = knex(config.development);

// export for use in codebase
module.exports = db;
