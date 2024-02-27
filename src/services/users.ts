const ModelUser = require("../database/models").User

const updateUser = async (id: string, data: any) => {
  const [isUpdated] = await ModelUser.update(data, {
    where: {
      id: parseInt(id),
    },
  })
  if (isUpdated) {
    const updatedUser = await ModelUser.findByPk(parseInt(id))
    return updatedUser
  } else {
    throw { status: 404, message: "User not found" }
  }
}

export { updateUser }
