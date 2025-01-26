import Assignment from "../models/assignment.model";
import { IAssignment } from "../types/interfaces/assignment.inter";
import User from "../models/user.model";
import { Iuser } from "../types/interfaces/user.inter";


export default class AssignmentService{

    static async getAssignments(userId: string): Promise<IAssignment[]>{
        const assignments = await Assignment.find({_user: userId}).sort('-createdAt');
        return assignments;
    }

    static async getOneAssignment(userId: string, assignmentId: string): Promise<IAssignment | null> {
        const assignment = await Assignment.findOne({ _user: userId, _id: assignmentId }).populate('_user');
        return assignment;
    }
    static async subAssignment(
        userId: string, 
        payload: IAssignment
    ): Promise<IAssignment | null> {

        const assignment = await Assignment.create({
            ...payload,
            _user: userId,
        })
        return assignment;
    }


}