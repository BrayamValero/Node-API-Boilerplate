"use strict"
const { Model } = require("sequelize")
const { encrypt, verify } = require("../../utils/bcrypt.handle")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: models.User_Role,
        foreignKey: "userId",
      })
    }
    async validatePassword(password) {
      const isValid = await verify(password, this.password)
      if (!isValid) {
        throw { status: 401, message: "Invalid credentials" }
      }
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [3, 16],
          },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 3,
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 3,
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 20],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      rememberToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  )
  // Sequelize => Model Hooks
  User.afterValidate(async (user, options) => {
    const hashedPass = await encrypt(user.password)
    user.password = hashedPass
  })

  return User
}
