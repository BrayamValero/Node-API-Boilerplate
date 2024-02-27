import { Request, Response } from "express"
import { handleHttpError, handleHTTPSuccess } from "../utils/error.handle"
import { addTodo, getTodos, getTodo, updateTodo, deleteTodo } from "../services/todos"

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const data = await getTodo(id)
    handleHTTPSuccess(res, {
      status: 200,
      message: "Item obtained successfully",
      data,
    })
  } catch (err) {
    handleHttpError(res, err)
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const data = await getTodos()
    handleHTTPSuccess(res, {
      status: 200,
      message: "List of items obtained successfully",
      data,
    })
  } catch (err) {
    handleHttpError(res, err)
  }
}

const addItem = async ({ body }: Request, res: Response) => {
  try {
    const data = await addTodo(body)
    handleHTTPSuccess(res, {
      status: 201,
      message: "Item added successfully",
      data,
    })
  } catch (err) {
    handleHttpError(res, err)
  }
}

const updateItem = async ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params
    const data = await updateTodo(id, body)
    handleHTTPSuccess(res, {
      status: 200,
      message: "Item updated successfully",
      data,
    })
  } catch (err) {
    handleHttpError(res, err)
  }
}

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const data = await deleteTodo(id)
    handleHTTPSuccess(res, {
      status: 204,
      message: "Item deleted successfully",
      data,
    })
  } catch (err) {
    handleHttpError(res, err)
  }
}

export { getItem, getItems, updateItem, addItem, deleteItem }
