import axios from "axios";

export const sendClickEvent = (courseId, action) => {
  // Sends user interaction data to backend for tracking/analytics
  return axios.post("http://localhost:8080/api/click", { courseId, action });
};