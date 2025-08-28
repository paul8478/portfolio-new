import axios from "axios";                         
const BASE_URL = "portfolio-backend-production-0aa1.up.railway.app";          

export const getUsers = async () => {                
  const response = await axios.get(`${BASE_URL}/portfolio`); 
  return response.data;                              
};
