const Pool = require("pg").Pool;

const connection = () => {
  new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
  });
};

export default connection;
