import mongoose, { Document, Schema } from 'mongoose';
import { IAssignment } from '../types/interfaces/assignment.inter';

const AssignmentSchema: Schema = new Schema<IAssignment>({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    }
  }, {
    timestamps: true,
});

const AssignmentModel = mongoose.model<IAssignment>('Assignment', AssignmentSchema);

export default AssignmentModel;
