import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerNewUser, loginUser } from "../services/auth";

const loginController = async ({ body }: Request, res: Response) => {
  try {
    const response = await loginUser(body);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_LOGIN", err);
  }
};

const registerController = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerNewUser(body);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_REGISTER", err);
  }
};

export { loginController, registerController };
