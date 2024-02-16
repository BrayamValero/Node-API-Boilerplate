import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token_alt_node";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};
const verifyToken = (jwt: string) => {
  const isValid = verify(jwt, JWT_SECRET);
  return isValid;
};

export { generateToken, verifyToken };
