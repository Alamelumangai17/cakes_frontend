import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, ImageBackground } from 'react-native';
// For non-Expo:
// import LinearGradient from 'react-native-linear-gradient';
// For Expo:
import { LinearGradient } from 'expo-linear-gradient';

const LogoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/logo5.jpeg')} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Dreamy Dessert's</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('AdminScreen')}
          >
            <LinearGradient colors={['#eea885', '#8a6408']} style={styles.gradient}>
              <Text style={styles.buttonText}>Manager</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            <LinearGradient colors={['#eea885', '#8a6408']} style={styles.gradient}>
              <Text style={styles.buttonText}>Customer</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8a6408',
    marginTop: 10,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    height: 150,
  },
  button: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LogoScreen;
