import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://backend-6vnm.onrender.com/api"
  withCredentials: true,
}); 
export default apiRequest;

