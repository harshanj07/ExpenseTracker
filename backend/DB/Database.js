import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db  = 'mongodb+srv://rahul2825kannan:bFVLmgc7XTxkBXUv@project1.5gw2hh9.mongodb.net/finance?retryWrites=true&w=majority&appName=project1'

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}