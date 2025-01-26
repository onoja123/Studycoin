import express from 'express';
import {
    getCommunities,
    getOneCommunity,
    createCommunity,
} from '../controllers/community.controller'
import { protect } from '../controllers/auth.controller';

const CommunityRouter = express.Router()

CommunityRouter.use(protect)

CommunityRouter.get('/all-communities', getCommunities)

CommunityRouter.get('/one-Community/:communityId', getOneCommunity)

CommunityRouter.post('/create-community', createCommunity)

export default CommunityRouter;