import mongoose, { Document, Schema, Types } from "mongoose";
import { IStreaks } from "../types/interfaces/streaks.inter";

const StreaksSchema = new Schema<IStreaks>({
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    currentStreak: {
        type: Number,
    },
    longestStreak: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
}, { timestamps: true });


const Streaks = mongoose.model<IStreaks>('Streaks', StreaksSchema)

export default Streaks;