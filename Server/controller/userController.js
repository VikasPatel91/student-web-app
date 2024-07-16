import model from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const jwtKey = "skey";
export async function Insert(req, res) {
  try {
    const user = await model({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: await bcrypt.hash(req.body.password, 12),
    });
    const saved = await user.save();
    jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
      if (err) {
        res.send("something went wrong");
      }
      res.send({ user, auth: token });
    });
    //  const token = jwt.sign({ loginUserId: user._id }, "24680");
    //  res.status(200).json(`${saved}, token :${token}`);
  } catch (error) {
    res.json(error).status(400);
  }
}

export async function allUser(req, res) {
  const user = await model.find();
  res.status(200).json(user);
}

export async function login(req, res) {
  const userEmail = await model.findOne({
    email: req.body.email,
  });
  const userPhone = await model.findOne({
    phone: req.body.phone,
  });
  if (userEmail) {
    if (bcrypt.compareSync(req.body.password, userEmail.password)) {
      jwt.sign({ userEmail }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send("something went wrong");
        }
        res.send({ userEmail, auth: token });
      });
      // const token = jwt.sign({ loginUserId: userEmail._id }, "24680");
      // res.status(200).json(`login success, token :${token}`);
    } else {
      res.status(400);
      res.json("Password is incorrect");
    }
  } else if (userPhone) {
    if (bcrypt.compareSync(req.body.password, userPhone.password)) {
      jwt.sign({ userPhone }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send("something went wrong");
        }
        res.send({ userPhone, auth: token });
      });
      //  const token = jwt.sign({ loginUserId: userPhone._id }, "24680");
      //  res.status(200).json(`login success, token :${token}`);
    } else {
      res.status(400);
      res.json("Password is incorrect");
    }
  } else {
    res.status(400);
    res.json("invalid email id or phone");
  }
}
