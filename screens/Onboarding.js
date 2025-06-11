import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Frame from "../assets/Frame.png";
import shadow from "../assets/shadow.png";
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={Frame} style={styles.image} />
      <Image source={shadow} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Our app is a platform for discovering and exploring the rich cultural heritage of different regions around India.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => {
          console.log('NEXT pressed');
          navigation.navigate('Onboarding1');
        }}
      >
        <Text style={styles.skipText}>NEXT »</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffce8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 18,
    // textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
    fontFamily: 'serif',
  },
  skipButton: {
    position: 'absolute',
    bottom: 70,
    right: 30,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 20,
    backgroundColor: '#fffce8',
    marginHorizontal: 10,
  },
  skipText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
});
