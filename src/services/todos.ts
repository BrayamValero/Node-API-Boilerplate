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
  if (!todo) {
    throw { status: 404, message: "Todo not found" }
  }
  return todo
}

const updateTodo = async (id: string, data: any) => {
  const currTodo = await ModelTodo.findOne({
    where: {
      id: parseInt(id),
    },
  })

  if (!currTodo) {
    throw { status: 404, message: "Todo not found" }
  }

  currTodo.set(data)

  const updatedTodo = await currTodo.save()

  return updatedTodo
}

const deleteTodo = async (id: string) => {
  const isDeleted = await ModelTodo.destroy({
    where: {
      id: parseInt(id),
    },
  })

  if (!isDeleted) {
    throw { status: 404, message: "Todo not found" }
  }

  return true
}

export { addTodo, getTodos, getTodo, updateTodo, deleteTodo }
