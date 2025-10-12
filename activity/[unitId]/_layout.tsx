import { Stack } from 'expo-router';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function ActivityLayout() {
  const { unitId } = useLocalSearchParams();
  
  // Pastikan unitId adalah string tunggal, sama seperti perbaikan sebelumnya
  const finalUnitId = Array.isArray(unitId) ? unitId[0] : unitId;

  return (
    <Stack>
      {/* Opsi default untuk Stack, menampilkan header standar yang dapat kembali.
        Kita menggunakan `Stack.Screen` di sini untuk memberikan header kepada layar-layar yang ada di dalam folder ini.
      */}
      
      {/* Layar 5: Unit 1 - Talk */}
      <Stack.Screen 
        name="talk" // Merujuk ke file app/activity/[unitId]/talk.tsx
        options={{
          title: `Unit ${finalUnitId || '...'} - Talk`,
          headerShown: true,
          headerStyle: { backgroundColor: '#95dada' }, // Warna header sesuai desain Anda
          headerTintColor: '#005f6b', // Warna teks dan tombol back
        }}
      />

      {/* Layar 6: Unit 1 - Listen */}
      <Stack.Screen 
        name="listen" // Merujuk ke file app/activity/[unitId]/listen.tsx
        options={{
          title: `Unit ${finalUnitId || '...'} - Listen`,
          headerShown: true,
          headerStyle: { backgroundColor: '#95dada' },
          headerTintColor: '#005f6b',
        }}
      />
      
    </Stack>
  );
}