import mongoose, { Document, Schema } from "mongoose";


export interface IStreaks extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    currentStreak: number;
    longestStreak: number;
    createdAt: Date;
    updatedAt: Date;
}