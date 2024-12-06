import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Create an Axios instance with a configured base URL and headers
const api = axios.create({
  baseURL: 'https://api.caisse.fcpo.agency/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add the token to requests
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken'); // Get the token from AsyncStorage
    console.log('Retrieved token:', token);  // Debugging line to check token retrieval

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn('No token found');  // Warning if the token is missing
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Login function
export const login = async (email: string, password: string): Promise<string> => {
  try {
    const response = await api.post('/login', { email, password });
    const token = response.data.token;

    // Store the token in AsyncStorage
    await AsyncStorage.setItem('userToken', token);

    return token;  // Return the token if login is successful
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Function to fetch product categories
export const fetchProductCategories = async (page: number = 1): Promise<any> => {
  try {
    const response = await api.get(`/product-categories?page=${page}`);
    return response.data;  // Return the fetched data
  } catch (error: any) {
    console.error('Error fetching categories:', error);  // Log error details
    throw new Error(error.response?.data?.message || 'Error loading categories');
  }
};

export default api;
