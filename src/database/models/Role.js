"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: models.User_Role,
        foreignKey: "roleId",
      });
      Role.belongsToMany(models.Permission, {
        through: models.Role_Permission,
        foreignKey: "roleId",
      });
      // Role has many Role_Permissions
      Role.hasMany(models.Role_Permission, {
        foreignKey: "roleId",
      });
    }
  }

  Role.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  );

  return Role;
};
