import mongoose, { Document, Schema } from "mongoose";


export interface IAssignment extends Document{
    _user: Schema.Types.ObjectId | string;
    title: string;
    description: string;
    url: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  