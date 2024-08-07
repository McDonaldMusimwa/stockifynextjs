import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
let connection: { isConnected?: number } = {};

async function dbConnect() {
  // Return early if already connected
  if (connection.isConnected) {
    console.log('Already connected to the database.');
    return;
  }

  try {
    // Connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URL as string);

    // Set connection state
    connection.isConnected = db.connections[0].readyState;
    console.log('=>Successfully connected to the database.<=');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err; // Rethrow the error to handle it at a higher level if needed
  }
}

export default dbConnect;
