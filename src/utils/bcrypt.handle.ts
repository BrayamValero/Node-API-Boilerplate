import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 8);
  return passwordHash;
};

const verify = async (pass: string, hashedPass: string) => {
  const isCorrect = await compare(pass, hashedPass);
  return isCorrect;
};

export { encrypt, verify };
