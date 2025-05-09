import axios, { AxiosInstance } from 'axios';

export const axiosApiInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: 10000,
});

axiosApiInstance.interceptors.request.use(
  async (config: any) => {
    config.headers['Accept-Language'] = 'Eng';
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  (error) => {
    throw error;
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);
