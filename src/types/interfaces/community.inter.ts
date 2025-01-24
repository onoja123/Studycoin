import mongoose, { Document, Schema } from "mongoose";


export interface ICommunity extends Document {
    title: string; 
    description: string; 
    createdBy: mongoose.Types.ObjectId; 
    answers: {
      _user: mongoose.Types.ObjectId;
      content: string; 
      createdAt: Date;
    }[]; 
    tags: string[];
    createdAt: Date; 
    updatedAt: Date; 
  }