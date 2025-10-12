import { Entypo, MaterialIcons } from '@expo/vector-icons'; // Instal expo-vector-icons
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#00ccaa', // Toska
      tabBarInactiveTintColor: '#005f6b', // Biru Tua
      tabBarStyle: { height: 60, paddingBottom: 5 } // Styling Tab Bar
    }}>
      <Tabs.Screen
        name="index" // Home Screen Anda
        options={{
          title: 'Home',
          headerShown: false, // Kita akan buat header kustom di layar
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore" // Misalnya tab "Space" di desain Anda
        options={{
          title: 'Space',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="storage" size={24} color={color} />,
        }}
      />
      {/* Tambahkan tab lain sesuai kebutuhan */}
    </Tabs>
  );
}