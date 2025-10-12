import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegistrationScreen() {
  // Fungsi untuk simulasi pendaftaran dan kembali ke Login
  const handleSave = () => {
    // Di sini akan ada logika validasi dan API call untuk registrasi.
    
    // Setelah selesai, navigasi kembali ke layar Login.
    // Menggunakan replace agar user tidak bisa 'back' ke layar registrasi
    router.replace('/login'); 
  };

  return (
    // Gunakan ScrollView agar layar tetap bisa diakses pada keyboard yang muncul
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Text style={styles.title}>Create Account!</Text>

        {/* Input Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input} placeholder="" />
          
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder="" keyboardType="email-address" />
          
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} placeholder="" secureTextEntry={true} />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        {/* Back to Login Link */}
        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text style={styles.linkText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#95dada', // Warna Biru Muda
  },
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#005f6b',
    marginBottom: 40,
    marginTop: 20,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#005f6b',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#00ccaa',
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
    textDecorationLine: 'underline',
  }
});