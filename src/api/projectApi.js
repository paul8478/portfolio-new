import axios from "axios";

const BASE_URL = "portfolio-backend-production-0aa1.up.railway.app";

export const getProjects = async () => {
  const response = await axios.get(`${BASE_URL}/Project`);
  return response.data;
};
