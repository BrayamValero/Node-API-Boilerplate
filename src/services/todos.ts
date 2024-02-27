const ModelTodo = require("../database/models").Todo

const addTodo = async (todo: any) => {
  const createdTodo = await ModelTodo.create(todo)
  return createdTodo
}

const getTodos = async () => {
  const todos = await ModelTodo.findAll()
  return todos
}

const getTodo = async (id: string) => {
  const todo = await ModelTodo.findByPk(parseInt(id))
  if (todo) {
    return todo
  } else {
    throw { status: 404, message: "Todo not found" }
  }
}

const updateTodo = async (id: string, data: any) => {
  const [isUpdated] = await ModelTodo.update(data, {
    where: {
      id: parseInt(id),
    },
  })
  if (isUpdated) {
    const updatedTodo = await ModelTodo.findByPk(parseInt(id))
    return updatedTodo
  } else {
    throw { status: 404, message: "Todo not found" }
  }
}

const deleteTodo = async (id: string) => {
  const isDeleted = await ModelTodo.destroy({
    where: {
      id: parseInt(id),
    },
  })
  if (isDeleted) {
    return true
  } else {
    throw { status: 404, message: "Todo not found" }
  }
}

export { addTodo, getTodos, getTodo, updateTodo, deleteTodo }
