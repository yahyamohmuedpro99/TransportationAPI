
import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const password = process.env.DB_PSWD;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://yahya:${password}@learncluster.mk6ma6e.mongodb.net/`, {   
      // useFindAndModify: false,
      // useCreateIndex: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

export { connectDB };
