import axios from 'axios';

const API_URL = 'http://localhost:5000/api/jobs';

export const createJob = async (jobData: any, token: string) => {
  const response = await axios.post(API_URL, jobData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getJobs = async (token: string) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateJob = async (id: string, jobData: any, token: string) => {
  const response = await axios.put(`${API_URL}/${id}`, jobData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteJob = async (id: string, token: string) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
