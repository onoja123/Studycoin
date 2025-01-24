import User from '../models/user.model';
import { UserType } from '../types/enums/user';
import { Iuser } from '../types/interfaces/user.inter';
import crypto from 'crypto';
const otpGenerator = require('otp-generator');

export default class AuthService{

    static async findUserByEmail(email: string): Promise<Iuser | null> {
      const data =  await User.findOne({ email }).select('+password');

      return data
  }

  static async findUserByOTP({ email, otp }: { email: string; otp: string }): Promise<any> {
    const user = await User.findOne({  email, otp }).select("+otp");
    return user;
  }

  static async findUserfindOTP(otpCode: string): Promise<Iuser | null> {
    const user = await User.findOne({ 
      'otp.code': otpCode, 
      'otp.expiresAt':  { $gte: new Date() } , 
    });
    return user;
  }

  static generateOTP() {
    return otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
  }

  static async generatePasswordFromEmail(email: string): Promise<string> {
    const emailParts = email.split(".");

    const firstThreeWords = emailParts.slice(0, 3).join("").substring(0, 3);

    return `${firstThreeWords}1234`;
}

}