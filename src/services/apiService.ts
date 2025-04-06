import axios from 'axios';

type TConfig = {
  headers: any;
};

import config from '../config';
import { STORAGE_KEYS } from '../constants';
const apiService = axios.create({
  baseURL: config.apiUrl,
});

console.log("API Base URL:", config.apiUrl); // Log the base URL

apiService.interceptors.request.use((config: TConfig) => {
  let assessToken = '';
  const currentUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  if (currentUser) {
    assessToken = JSON.parse(currentUser).accessToken;
  }

  config.headers = {
    ...config.headers,
    TokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OCIsIkhldEhhblN0cmluZyI6IjI3LzA3LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1MzU3NDQwMDAwMCIsIm5iZiI6MTcyNjA3NDAwMCwiZXhwIjoxNzUzNzIyMDAwfQ.BTmM2iB4rp2M5zBswdnAhImSAoSPeaxquN5mTgxFzaQ',
    Authorization: `Bearer ${assessToken}`,
  };

  console.log("TokenCybersoft:", config.headers.TokenCybersoft); // Log the token
  return config;
});

export default apiService;
