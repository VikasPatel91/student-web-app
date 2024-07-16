import express from "express";
import {
  InsertUser,
  userData,
  userUpdate,
} from "./controller/stuController.js";
import { Insert, login, allUser } from "./controller/userController.js";
import { auth } from "./middleware/auth.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to home page");
});
//router.all("*", [auth]);
router.post("/students", InsertUser);
router.get("/students", userData);
router.put("/user/:id", userUpdate);
router.post("/user", Insert);
router.get("/user", allUser);
router.post("/login", login);

export default router;
