import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const handleNavigateToCategories = () => {
    navigation.navigate('Categories');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur la page d'accueil!</Text>
      <Button title="Voir les catégories" onPress={handleNavigateToCategories} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
