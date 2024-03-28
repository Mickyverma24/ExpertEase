import mongoose from "mongoose";

 export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONOGO_DB_URI);
    console.log("Connected to mongoDb succssfully....");
  } catch (error) {
    console.log("Error in database conection : " , error.message);
  }
}
