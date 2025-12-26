import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 
  (isProduction ? 'https://logioneapi.production.com/api' : 'https://logioneapi.mlldev.com/api');

export const SSO_LOGIN_URL = process.env.REACT_APP_SSO_LOGIN_URL || 
  (isProduction ? 'https://login.production.com/sso/login?client_id=logione' : 'https://login.mlldev.com/sso/login?client_id=logione');

export const API_ENDPOINTS = {
  validateSSOToken: '/auth/validateSSOToken',
};

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
