const ModelTodo = require("../database/models").Todo;

const addTodo = async (todo: any) => {
  const createdTodo = await ModelTodo.create(todo);
  return createdTodo;
};

const getTodos = async () => {
  const todos = await ModelTodo.findAll();
  return todos;
};

const getTodo = async (id: string) => {
  const todo = await ModelTodo.findByPk(parseInt(id));
  return todo ?? null;
};

const updateTodo = async (id: string, data: any) => {
  const updatedTodo = await ModelTodo.update(data, {
    where: {
      id: parseInt(id),
    },
    returning: true,
    plain: true,
  });
  return updatedTodo ?? null;
};

const deleteTodo = async (id: string) => {
  const deletedCount = await ModelTodo.destroy({
    where: {
      id: parseInt(id),
    },
  });
  return deletedCount;
};

export { addTodo, getTodos, getTodo, updateTodo, deleteTodo };
