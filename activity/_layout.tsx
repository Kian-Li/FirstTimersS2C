import { Stack } from 'expo-router';
import React from 'react';

export default function ActivityRootLayout() {
  return (
    <Stack>
      {/* Ini akan mencakup semua rute di dalam folder 'activity', termasuk [unitId].
        Karena kita ingin Talk dan Listen memiliki header sendiri yang diatur di [unitId]/_layout.tsx,
        kita set headerShown: false di sini, dan biarkan sub-layout yang menangani tampilan header. 
      */}
      <Stack.Screen 
        name="[unitId]" // Merujuk ke folder app/activity/[unitId]
        options={{
          headerShown: false, // Biarkan [unitId]/_layout.tsx yang menentukan tampilan
          presentation: 'modal', // Opsional: Tampilkan layar aktivitas sebagai modal
        }}
      />
      
      {/* Jika Anda memiliki rute aktivitas lain (misalnya, /activity/quiz.tsx), 
        Anda bisa menambahkannya di sini.
      */}
    </Stack>
  );
}