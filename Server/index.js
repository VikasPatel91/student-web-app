import express from "express";
import router from "./router.js";
import "./DB.js";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(router);
app.listen(5000, () => {
  console.log("Server is Running at 5000");
});
