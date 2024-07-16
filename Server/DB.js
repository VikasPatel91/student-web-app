import mongoose from "mongoose";

const DB = mongoose.connect("mongodb://127.0.0.1/my");
DB.then((result) => {
  console.log("DataBase Connected");
});
DB.catch((err) => {
  console.log("DataBase Not Connected");
});

export default DB;
