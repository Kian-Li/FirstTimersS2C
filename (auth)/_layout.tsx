import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack>
      {/* Opsi Stack.Screen untuk _layout akan diset ke headerShown: false 
        karena desain Login/Register Anda adalah layar penuh tanpa header bawaan. 
      */}
      
      {/* Layar Registrasi / Create Account! */}
      <Stack.Screen 
        name="regist" // Merujuk ke file app/(auth)/regist.tsx
        options={{
          headerShown: false,
          title: 'Register',
        }}
      />

      {/* Layar Login / Welcome Back! */}
      <Stack.Screen 
        name="login" // Merujuk ke file app/(auth)/login.tsx
        options={{
          headerShown: false,
          title: 'Login',
        }}
      />
      
      {/* Catatan: Jika Anda ingin login sebagai rute pertama, Anda bisa 
        menggunakan `initialRouteName="login"` pada komponen Stack di atas.
      */}
    </Stack>
  );
}