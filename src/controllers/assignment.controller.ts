import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import ResponseHelper from "../utils/response";
import { cloudinary } from "../utils/cloudinary.config";
import multer from "multer";
import AssignmentService from "../services/assignment.service";

/**
 * @author Okpe Onoja <okpeonoja18@gmail.com>
 * @description Get all assignments
 * @route `/api/v1/assignment/all-assignments`
 * @access Private
 * @type GET
 **/
export const getAllAssignment = catchAsync(async(req: Request, res: Response, next: NextFunction)=>{

        const assignment = await AssignmentService.getAssignments(req.user?.id);

        if (!assignment) {
            return ResponseHelper.sendSuccessResponse(res, {
            data: [],
            statusCode: ResponseHelper.OK,
            });
        }

        ResponseHelper.sendSuccessResponse(res,
            {
                data: assignment,
                statusCode: ResponseHelper.OK
            });
})


/**
 * @author Okpe Onoja <okpeonoja18@gmail.com>
 * @description Get one assignment
 * @route `/api/v1/assignment/one-assignment/:assignmentId`
 * @access Private
 * @type GET
 **/
export const getOneAssignment = catchAsync(async(req: Request, res: Response, next: NextFunction)=>{

    const assignment = await AssignmentService.getOneAssignment(req.user?.id, req.params.assignmentId);

    if (!assignment) {
        return ResponseHelper.sendSuccessResponse(res, {
        data: [],
        statusCode: ResponseHelper.OK,
        });
    }

    ResponseHelper.sendSuccessResponse(res,
        {
            data: assignment,
            statusCode: ResponseHelper.OK
        });
})


export const subAssignment = async (req: Request, res: Response, next: NextFunction) => {
    try {
  
      const upload = multer().single('assignment');
  
      upload(req, res, async (err: any) => {
        if (err) {
          return next (new AppError('Error uploading image.', ResponseHelper.BAD_REQUEST));
        }
          if (!req.file) {
            return new AppError('No file uploaded.', ResponseHelper.BAD_REQUEST);
          }
  
          const dataUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
  
          const result = await cloudinary.uploader.upload(dataUrl, {
            folder: 'assignment_images',
          });
  
          const imageUrl = result.secure_url;
  
          const assignment = await AssignmentService.subAssignment(req.user?.id, { ...req.body, image: imageUrl });
  
          if (!assignment) {
            return new AppError('User not found', ResponseHelper.RESOURCE_NOT_FOUND);
          }
  
          ResponseHelper.sendSuccessResponse(res, {
            message: 'Assignment submitted successfully',
            statusCode: ResponseHelper.OK,
            data: { assignment },
          });
      });
    } catch (error) {
      next(new AppError('An error occurred while trying to submit assignment. Please try again.', ResponseHelper.INTERNAL_SERVER_ERROR));
    }
};