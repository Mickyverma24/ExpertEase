import mongoose from "mongoose";

 export const connectToDB = async () => {
  try {
    // await mongoose.connect(process.env.MONOGO_DB_URI);
    // await mongoose.connect()
    const DB_OPTIONS ={
      dbName :"MYChatApp"
    }
    await mongoose.connect(process.env.URL,DB_OPTIONS)
    console.log("Connected to mongoDb succssfully....");
  } catch (error) {
    console.log("Error in database conection : " , error.message);
  }
}

