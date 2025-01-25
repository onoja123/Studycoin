import express from 'express';
import {
    getAllAssignment,
    getOneAssignment,
    subAssignment,
} from '../controllers/assignment.controller'
import { protect } from '../controllers/auth.controller';

const AssignmentRouter = express.Router()

AssignmentRouter.use(protect)

AssignmentRouter.get('/all-notification', getAllAssignment)

AssignmentRouter.get('/one-assignment/:assignmentId', getOneAssignment)

AssignmentRouter.post('/submit', subAssignment)

export default AssignmentRouter;