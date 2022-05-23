import { Response } from 'express'

export type ResponseParams = {
  status: number;
  message: string;
  success: boolean;
}

export const createResponse = (params: ResponseParams, res: Response) => {
  const { status, message, success } = params;
  return res.status(status).json({
    success,
    message,
  });
};
