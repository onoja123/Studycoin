import mongoose, { Document, Schema } from "mongoose";
import { UserType,  } from "../enums/user";

export interface IUser extends Document {
    fullname: string;
    email: string;
    userType: string;
    password: string;
    emailVerification: {
        token: string;
        expiresAt: Date;
    };
}

interface IOtp {
    code: number | null;
    expiresAt: Date | null;
}


export interface Iuser extends Document{
    fullname: string;
    email: string;
    phone: string;
	userType?: UserType;
    password: string;
    image?: string | ''; 
    passwordConfirm: string;
    isActive: boolean;
    isAdmin: boolean;
    verificationToken: string;
    verificationTokenExpires: Date;
    otp: IOtp;
    _attendance: mongoose.Types.ObjectId[];
    resetPasswordToken: number;
    resetPasswordExpire: Date;
    verifyEmailToken: string;
    correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;
    generateAuthToken(): string;
    changedPasswordAfter(JWTTimestamp: any): boolean;
    createdAt: Date;
}
