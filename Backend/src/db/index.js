import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDb connected successfully");
    } catch (error) {
        console.log("❌ MongoDB connection Failed",error.message);
        process.exit(1)
    }
}

export default connectDB;