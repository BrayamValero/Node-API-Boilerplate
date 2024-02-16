"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role_Permission extends Model {
    static associate(models) {
      // define association between Role and Permission
      Role_Permission.belongsTo(models.Role, { foreignKey: "roleId" });
      Role_Permission.belongsTo(models.Permission, {
        foreignKey: "permissionId",
      });
    }
  }
  Role_Permission.init(
    {
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Role",
          key: "id",
        },
      },
      permissionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Permission",
          key: "id",
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Role_Permission",
    }
  );
  return Role_Permission;
};
