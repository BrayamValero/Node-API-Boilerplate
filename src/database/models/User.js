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

  User.beforeCreate(async (user, options) => {
    const hashedPass = await encrypt(user.password)
    user.password = hashedPass
  })

  User.beforeUpdate(async (user, options) => {
    const hashedPass = await encrypt(user.password)
    user.password = hashedPass
  })

  User.prototype.validatePassword = async function (password) {
    const isCorrect = await verify(password, this.password)
    return isCorrect
  }

  return User
}
