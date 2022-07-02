import axios from 'axios';

export const AxiosInstance = axios.create({
  //baseURL: 'http://10.0.2.2:8080/comercio-seguro',
  // baseURL: 'http://192.168.52.104:8080/comercio-seguro',
  baseURL: "http://192.168.1.5:8080/comercio-seguro"
});
