import axios from "axios";

const BASE_URL = "https://portfolio-backend-production-0aa1.up.railway.app";

export const getSubjects = async () => {
  const response = await axios.get(`${BASE_URL}/subject`);
  return response.data;
};
