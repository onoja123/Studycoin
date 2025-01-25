import express from 'express';
import {
    getCommunities,
    getOneCommunity,
} from '../controllers/community.controller'
import { protect } from '../controllers/auth.controller';

const CommunityRouter = express.Router()

CommunityRouter.use(protect)

CommunityRouter.get('/all-communities', getCommunities)

CommunityRouter.get('/one-Community/:communityId', getOneCommunity)

export default CommunityRouter;