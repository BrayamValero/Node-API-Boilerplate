"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association between Role and Permission
      Todo.belongsTo(models.User, { foreignKey: "userId" })
    }
  }
  Todo.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 240,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Todo",
    }
  )
  return Todo
}
