import mongoose, { Document, Schema, Types } from "mongoose";
import { ICommunity } from "../types/interfaces/community.inter";

const CommunitySchema = new Schema<ICommunity>({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    answers: [
        {
            _user: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User", required: true 
        }, 
          content: { 
            type: String, 
            required: true 
        },
          createdAt: { 
            type: Date, 
            default: Date.now 
        }, 
        },
    ],
    tags: { 
        type: [String], 
        default: [] 
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
}, { timestamps: true });


const Commuintiy = mongoose.model<ICommunity>('Commuintiy', CommunitySchema)

export default Commuintiy;