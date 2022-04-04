import axios from "axios";

export default axios.create({
  baseURL: "https://6249d8b2fd7e30c51c079852.mockapi.io",
  headers: {
    "Content-type": "application/json",
  },
});
