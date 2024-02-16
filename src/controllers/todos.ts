import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  addTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../services/todos";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getTodo(id);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_GET_ITEM", err);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getTodos();
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_GET_ITEMS", err);
  }
};

const updateItem = async ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateTodo(id, body);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_UPDATE_ITEM", err);
  }
};

const addItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await addTodo(body);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_ADD_ITEM", err);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteTodo(id);
    res.send(response);
  } catch (err) {
    handleHttp(res, "ERROR_DELETE_ITEM", err);
  }
};

export { getItem, getItems, updateItem, addItem, deleteItem };
