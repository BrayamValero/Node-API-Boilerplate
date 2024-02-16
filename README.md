# Node API Boilerplate

A Node.js API boilerplate created as a starting point for future projects.

## Getting Started

To run this project, first, create a .env file and update everything according to your database settings. Don't worry; just follow the commands below so you can easily deploy the project in seconds.

> Note: If you want to define or change additional database settings, move to: **src\config\database.js**

### Installation

```bash
# 1. Generate a new .env file
cp .env.example .env

# 2. Install dependencies
npm install

# 3. Create a fresh database (migration & seeders included)
npm run db

# 4. Run everything
npm run dev
```

### What's Next?

After following those steps, you should be ready to play around with the API. Now, let's take a look and see which features are available.

| Endpoints      | Method | Description                   | Body                                     | Token      | Authorization |
| -------------- | ------ | ----------------------------- | ---------------------------------------- | ---------- | ------------- |
| /auth/login    | POST   | Login with credentials        | `username` `password`                    |            |               |
| /auth/register | POST   | Register a user               | `username` `fullName` `email` `password` |            |               |
| /todos         | GET    | Get all todos                 |                                          | `required` | `required`    |
| /todos/:id     | GET    | Get a single todo based on ID |                                          | `required` | `required`    |
| /todos         | POST   | Add a todo                    | `userId` `description`                   | `required` | `required`    |
| /todos/:id     | PUT    | Edit a todo based on ID       | `userId` `description`                   | `required` | `required`    |
| /todos/:id     | DELETE | Delete a todo based on ID     |                                          | `required` | `required`    |

I'd highly recommend installing the [Thunder Client Extension](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) which is lightweight Rest API Client for VS Code.

## User Access Control

Just like in Laravel with Spatie, this project comes equipped with a simple but efficient user access control system. This feature allows you to organize users into roles and assign specific permissions. Here's a quick rundown:

1. **Roles:**

   - **What they are:** Roles group permissions for users.
   - **Example:** "Admin," "User," "Moderator."
   - **Usage:** Assigning roles to users grants predefined access rights.

2. **Permissions:**

   - **What they do:** Detailed rules for user actions.
   - **Example:** "Read," "Write," "Delete."
   - **Usage:** Permissions are tied to roles, defining what users can do.

3. **Middleware:**

   - **How it helps:** Checks if users have the right role or permission.
   - **Example:** Protects routes, ensuring access based on roles or permissions.

4. **Endpoint Protection:**

   - **Usage:** Routes are safeguarded based on roles or permissions.
   - **Example:** `/admin/dashboard` is accessible only to users with the "Admin" role.

5. **Dynamic Authorization:**
   - **Flexibility:** Easily define new roles or permissions.
   - **Adaptation:** Customize the system to meet changing application needs.

Incorporating these features ensures your Node API Boilerplate has a flexible and efficient user access control system. It enables precise control over who can access specific endpoints, making it adaptable to the evolving requirements of your application.

```js
// Example => Getting all todos is only available for users that have *view-todos* enabled
router.get("/", authUser, authPermission("view-todos"), getItems);
```

### Why todos?

You might be wondering "why todos?" Well, as a developer, you might encounter thousands of tutorials that explain the basics of a CRUD operation. I wanted to standardize this code so everyone can easily understand it and then adapt it to its current needs.
