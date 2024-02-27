import { generateToken } from "../utils/jwt.handle"

const ModelUser = require("../database/models").User

const registerUser = async (body: any) => {
  const registeredUser = await ModelUser.create(body)
  return registeredUser
}

const loginUser = async ({ username, password }: any) => {
  const loggedUser = await ModelUser.findOne({
    where: {
      username,
    },
  })

  if (!loggedUser) {
    throw { status: 404, message: "User not found" }
  }

  const isValid = await loggedUser.validatePassword(password)

  if (!isValid) {
    throw { status: 401, message: "Invalid credentials" }
  }

  const token = generateToken(loggedUser.id)

  const data = {
    token,
    user: loggedUser,
  }

  return data
}

export { registerUser, loginUser }
