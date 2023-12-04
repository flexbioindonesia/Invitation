/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-shadow */
import axios from 'axios';
import { getInterceptorsRequest } from './configPublic';
// import qs from 'qs';

export const clientGateway = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE, // YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
  // paramsSerializer: (params) => qs.stringify(params),
});

clientGateway.interceptors.request.use(
  (config) => {
    config = getInterceptorsRequest(config);
    return config;
  },
);

export default clientGateway;
