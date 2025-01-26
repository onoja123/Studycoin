import mongoose, { Document, Schema } from "mongoose";
import { Status } from "../enums/assignment";


export interface IAssignment extends Document{
    _user: Schema.Types.ObjectId | string;
    title: string;
    description: string;
    url: string;
    status: Status
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  