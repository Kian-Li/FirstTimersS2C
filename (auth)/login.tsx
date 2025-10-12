import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  // Fungsi untuk simulasi login dan pindah ke Home
  const handleLogin = () => {
    // Di sini seharusnya ada API call. Jika sukses:
    router.replace('/'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Back to Register Link */}
      <TouchableOpacity onPress={() => router.push('/regist')}>
        <Text style={styles.linkText}>Create Account!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95dada', // Warna Biru Muda
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#005f6b',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#00ccaa', // Warna Hijau Toska
    padding: 18,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 20,
    color: '#005f6b',
    fontSize: 14,
  }
});