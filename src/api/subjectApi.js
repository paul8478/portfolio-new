import axios from "axios";

const BASE_URL = "http://localhost:8081";

export const getSubjects = async () => {
  const response = await axios.get(`${BASE_URL}/subject`);
  return response.data;
};
