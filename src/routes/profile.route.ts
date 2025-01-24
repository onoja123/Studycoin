import express from "express";
import { 
    getProfile, 
    updateProfile, 
    uploadImage, 
    deleteMember,
} from "../controllers/profile.controller";

import {protect} from "../controllers/auth.controller";

const ProfileRouter = express.Router()

ProfileRouter.use(protect)

ProfileRouter.get('/get-profile', getProfile)

ProfileRouter.patch('/update-profile', updateProfile);

ProfileRouter.put('/upload-image', uploadImage);

ProfileRouter.delete('/delete-member/:id', deleteMember)

export default ProfileRouter;