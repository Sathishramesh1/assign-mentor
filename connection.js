const mongoose=require('mongoose');
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://sathishmech2k13:sathish@cluster0.ioutwar.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`);
      console.log(`MongoDB Connected:${conn.connection.host}`);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;