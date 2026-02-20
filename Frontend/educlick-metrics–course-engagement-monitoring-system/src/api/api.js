import axios from "axios";

export const sendClickEvent = (courseId, action) => {
  return axios.post("http://localhost:8080/api/click", {courseId, action});
};