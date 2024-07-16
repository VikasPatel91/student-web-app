import model from "../model/stuModel.js";
export async function InsertUser(req, res) {
  try {
    const user = await model(req.body);
    const saved = await user.save();
    res.json(saved).status(200);
  } catch (error) {
    res.json(error).status(400);
  }
}
export async function userData(req, res) {
  const user = await model.find();
  res.json(user).status(200);
}

export async function userUpdate(req, res) {
  const id = req.params.id;
  const user = await model.findByIdAndUpdate({ id: id });
  res.json(user).status(200);
}