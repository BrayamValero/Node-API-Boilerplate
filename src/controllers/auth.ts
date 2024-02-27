import { Request, Response } from "express"
import { handleHttpError, handleHTTPSuccess } from "../utils/error.handle"
import { registerUser, loginUser } from "../services/auth"

const loginController = async ({ body }: Request, res: Response) => {
  try {
    const data = await loginUser(body)
    handleHTTPSuccess(res, {
      status: 200,
      message: "User logged successfully",
      data,
    })
  } catch (err: any) {
    handleHttpError(res, err)
  }
}

const registerController = async ({ body }: Request, res: Response) => {
  try {
    const data = await registerUser(body)
    handleHTTPSuccess(res, {
      status: 201,
      message: "User created successfully",
      data,
    })
  } catch (err: any) {
    handleHttpError(res, err)
  }
}

export { loginController, registerController }
