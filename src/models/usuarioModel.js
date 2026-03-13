const pool = require('../config/database');

const obtenerUsuarios = async () => {
  const result = await pool.query('SELECT * FROM usuarios');
  return result.rows;
};

module.exports = {
  obtenerUsuarios
};