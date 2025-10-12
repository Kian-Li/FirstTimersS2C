import { Redirect, Stack } from 'expo-router';
// import { useAuth } from '../hooks/useAuth'; // Anda perlu membuat hook ini

// Asumsi sederhana: Ganti ini dengan pengecekan status nyata
const isAuthenticated = false; // <-- SETEL INI MENJADI 'false' UNTUK AWAL

export default function RootLayout() {
  // const { user } = useAuth();
  // const isAuthenticated = !!user; 

  // Jika pengguna BELUM terotentikasi, alihkan ke grup (auth)
  if (!isAuthenticated) {
    // Alihkan pengguna ke rute (auth)
    return (
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* Semua route lain disembunyikan sampai login */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
      </Stack>
    );
  }

  // Jika pengguna SUDAH terotentikasi, tampilkan grup (tabs)
  return (
    <Stack>
      {/* Jika Anda ingin langsung ke (tabs), gunakan Redirect: */}
      <Redirect href="/(tabs)" />
    </Stack>
  );
}