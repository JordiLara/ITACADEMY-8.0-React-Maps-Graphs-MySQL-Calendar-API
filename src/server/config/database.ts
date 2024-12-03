import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'rutas',
  port: Number(process.env.DB_PORT) || 3001,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully');
    connection.release();
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
};

testConnection();

const testDatabaseQuery = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM rutas_senderismo');
    console.log('Results from database:', rows);
  } catch (err) {
    console.error('Error querying the database:', err);
  }
};

// Llamar a la función de prueba
testDatabaseQuery();

export default pool;