import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const handleNavigateToCategories = () => {
    navigation.navigate('Categories');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur la page d'accueil!</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToCategories}>
        <Text style={styles.buttonText}>Voir les catégories</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Ajout d'une couleur de fond pour améliorer l'esthétique
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333', // Couleur du texte pour un meilleur contraste
  },
  button: {
    backgroundColor: '#007BFF', // Couleur de fond du bouton
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Couleur du texte du bouton
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;