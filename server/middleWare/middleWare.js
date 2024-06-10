// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("You are not authenticated!");

  jwt.verify(token, "X7RUYe3VZsZWPzJ9pG91WcvKzlL3OmIDlTdSCPmTRiQ=", (err, user) => { // Use your secret from .env
    if (err) return res.status(403).json("Token is not valid!");
    req.user = user;
    next();
  });
};