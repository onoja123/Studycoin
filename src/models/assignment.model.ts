import mongoose, { Document, Schema } from 'mongoose';
import { IAssignment } from '../types/interfaces/assignment.inter';
import { Status } from '../types/enums/assignment';

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
    status: {
      type: String,
		  enum: Object.values(Status),
      default: Status.PENDING
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    }
  }, {
    timestamps: true,
});

const Assignment = mongoose.model<IAssignment>('Assignment', AssignmentSchema);

export default Assignment;
