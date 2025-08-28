import axios from "axios";                         
const BASE_URL = "http://localhost:8081";          

export const getUsers = async () => {                
  const response = await axios.get(`${BASE_URL}/portfolio`); 
  return response.data;                              
};
