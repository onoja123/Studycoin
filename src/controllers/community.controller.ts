import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import CommunityService from "../services/community.service";
import ResponseHelper from "../utils/response";


/**
 * @author Okpe Onoja <okpeonoja18@gmail.com>
 * @description Get all communities
 * @route `/api/community/all-communities`
 * @access Private
 * @type GET
 **/
export const getCommunities = catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    try {

        const community = await CommunityService.getCommunities();

        if (!community) {
            return ResponseHelper.sendSuccessResponse(res, {
            data: [],
            statusCode: ResponseHelper.OK,
            });
        }

        ResponseHelper.sendSuccessResponse(res,
            {
                data: community,
                statusCode: ResponseHelper.OK
            });
    } catch (error) {
        return next(new AppError("An error occurred. Please try again.", ResponseHelper.INTERNAL_SERVER_ERROR))
    }
})

/**
 * @author Okpe Onoja <okpeonoja18@gmail.com>
 * @description Get one community
 * @route `/api/community/one-community/:id`
 * @access Private
 * @type GET
 **/
export const getOneCommunity = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {

        const community = await CommunityService.getOneCommunity(req.params.communityId);

        if (!community) {
            return ResponseHelper.sendSuccessResponse(res, {
            data: [],
            statusCode: ResponseHelper.OK,
            });
        }

        ResponseHelper.sendSuccessResponse(res,
            {
                data: community,
                statusCode: ResponseHelper.OK,
            });
    } catch (error) {
        return next(new AppError("An error occurred while trying to get a community. Please try again.", ResponseHelper.INTERNAL_SERVER_ERROR))
    }
});
