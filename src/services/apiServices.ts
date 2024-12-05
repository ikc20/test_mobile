import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Crée une instance Axios configurée
const api = axios.create({
  baseURL: 'https://api.caisse.fcpo.agency/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token aux requêtes
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken'); // Récupère le token stocké
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Fonction pour le login
export const login = async (email: string, password: string): Promise<string> => {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });

    // Retourne le token si la connexion est réussie
    return response.data.token;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Fonction pour récupérer les catégories de produits
export const fetchProductCategories = async (page: number = 1): Promise<any> => {
  try {
    const response = await api.get(`/product-categories?page=${page}`);
    return response.data; // Retourne les données de l'API
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Erreur lors du chargement des catégories');
  }
};

export default api;