import mongoose from 'mongoose';


export const connectDB = async() => {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

//10eayushmishrayhs_db_user Eg1cOLduUkHUOhsh
// mongodb+srv://10eayushmishrayhs_db_user:Eg1cOLduUkHUOhsh@cluster0.nqrj2pi.mongodb.net/notes_db?appName=Cluster0