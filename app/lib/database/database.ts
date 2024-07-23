import mongoose from "mongoose";

// Track the connection
let isConnected = false;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);
  
  if (isConnected) {
    console.log("Database is already connected.");
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI environment variable is not set.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "stockinventory"
    }),

    isConnected = true;
    console.log("Successfully connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
