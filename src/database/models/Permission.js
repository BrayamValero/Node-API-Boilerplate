"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    static associate(models) {
      // Permission has many Roles through Role_Permissions
      Permission.belongsToMany(models.Role, {
        through: models.Role_Permission,
        foreignKey: "permissionId",
      });
      // Permission has many Role_Permissions
      Permission.belongsToMany(models.User_Role, {
        through: { model: models.Role_Permission },
        foreignKey: "permissionId",
        otherKey: "roleId",
      });
    }
  }

  Permission.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Permission",
    }
  );

  return Permission;
};
