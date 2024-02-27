import { Router } from "express"
import { authUser } from "../middleware/authUser"
import { updateItem } from "../controllers/users"

const router = Router()

router.put("/:id", authUser, updateItem)

export { router }
