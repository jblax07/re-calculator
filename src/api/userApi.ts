import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const registerUser = async (userData: any) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData: any) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token: string) => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
