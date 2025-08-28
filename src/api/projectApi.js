import axios from "axios";

const BASE_URL = "http://localhost:8081";

export const getProjects = async () => {
  const response = await axios.get(`${BASE_URL}/Project`);
  return response.data;
};
