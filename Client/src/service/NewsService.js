import axios from "axios";

export const Headlines = (student) => {
  return axios.post("http://localhost:5000/students", student);
};

export const AllNews = () => {
  return axios.get("http://localhost:5000/students");
};

export const DeleteByID = (id) => {
  return axios.delete(`http://localhost:5000/student/${id}`);
};
