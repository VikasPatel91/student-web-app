import jwt from "jsonwebtoken";
import model from "../model/userModel.js";

export async function auth(req, res, next) {
  try {
    // Check if the token exists in cookies
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    // Verify the token
    const jwtKey = "skey"; // Replace with your actual secret key
    const decodedToken = jwt.verify(token, jwtKey);

    // Check if the token has expired
    if (Date.now() >= decodedToken.exp * 1000) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token has expired" });
    }

    // Find the user based on the decoded token
    const user = await model.findOne({ _id: decodedToken._id });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    // Attach the user information to the request for further use
    req.user = user;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // Handle token verification errors
    console.error(error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}

// export function validateToken(req, res, next) {
//   const jwtKey = "skey";
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, jwtkey, (err, decoded) => {
//     if (err) return res.sendStatus(403);
//     req.tokenData = decoded;
//     next();
//   });
// }
