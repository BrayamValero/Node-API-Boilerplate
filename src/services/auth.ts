import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const ModelUser = require("../database/models").User;

const registerNewUser = async ({
  username,
  fullName,
  email,
  password,
}: any) => {
  const hashedPass = await encrypt(password);
  const registerUser = await ModelUser.create({
    username,
    fullName,
    email,
    password: hashedPass,
  });
  return registerUser;
};

const loginUser = async ({ username, password }: any) => {
  const isUser = await ModelUser.findOne({
    where: {
      username,
    },
  });

  if (!isUser) return "USER_NOT_FOUND";

  const hashedPass = isUser.password;
  const isValid = await verify(password, hashedPass);

  if (!isValid) return "INCORRECT_PASSWORD";

  const token = generateToken(isUser.id);

  const data = {
    token,
    user: isUser,
  };

  return data;
};

export { registerNewUser, loginUser };
