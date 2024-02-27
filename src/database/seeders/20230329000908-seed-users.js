"use strict"
const { hash } = require("bcryptjs")
const { faker } = require("@faker-js/faker")
require("dotenv/config")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = []
    const usernameList = ["admin", "moderator", "member"]
    const hashedPassword = await hash(process.env.ADMIN_USER_PASSWORD || "12345", 8)
    for (let i = 0; i < 3; i++) {
      userList.push({
        username: usernameList[i],
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        rememberToken: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    await queryInterface.bulkInsert("Users", userList)
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {})
  },
}
