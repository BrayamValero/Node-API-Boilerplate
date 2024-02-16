import { Router } from "express";
import { authUser } from "../middleware/authUser";
import { authPermission } from "../middleware/authPermission";

import {
  getItem,
  getItems,
  addItem,
  updateItem,
  deleteItem,
} from "../controllers/todos";

const router = Router();

router.get("/", authUser, authPermission("delete-todos"), getItems);
router.get("/:id", authUser, getItem);
router.post("/", authUser, authPermission("add-todos"), addItem);
router.put("/:id", authUser, authPermission("edit-todos"), updateItem);
router.delete("/:id", authUser, authPermission("delete-todos"), deleteItem);

export { router };
