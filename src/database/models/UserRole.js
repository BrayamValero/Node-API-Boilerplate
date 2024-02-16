"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User_Role extends Model {
    static associate(models) {
      User_Role.belongsTo(models.User, { foreignKey: "userId" });
      User_Role.belongsTo(models.Role, { foreignKey: "roleId" });
    }
  }

  User_Role.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Role",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "User_Role",
    }
  );

  return User_Role;
};
