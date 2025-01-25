import mongoose, { Document, Schema } from "mongoose";


export interface IStreaks extends Document {
    _user: mongoose.Schema.Types.ObjectId;
    currentStreak: number;
    longestStreak: number;
    createdAt: Date;
    updatedAt: Date;
}