import { Request, Response } from "express"
import { handleHttpError, handleHTTPSuccess } from "../utils/error.handle"
import { updateUser } from "../services/users"

const updateItem = async ({ headers, body, params }: Request, res: Response) => {
  try {
    const { id } = params
    const data = await updateUser(id, body)
    handleHTTPSuccess(res, {
      status: 200,
      message: "User updated successfully",
      data,
    })
  } catch (err) {
    handleHttpError(res, err)
  }
}

export { updateItem }
