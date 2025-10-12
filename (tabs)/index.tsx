import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DiamondUnit from '../../components/Unit/DiamondUnit'; // Sesuaikan path

// Data Dummy Unit
const units = [
  { id: 1, number: 1, locked: false },
  { id: 2, number: 2, locked: false },
  { id: 3, number: 'Bonus', locked: false },
  { id: 4, number: 4, locked: true },
  { id: 5, number: 5, locked: true },
  { id: 6, number: 6, locked: true },
  { id: 7, number: 7, locked: true },
];

export default function HomeScreen() {
  // Navigasi ke Layar Detail Progres Unit
  const navigateToUnit = (unitId: number | string) => {
    // KESALAHAN PADA KODE LAMA: Ada definisi fungsi ganda di sini. (Baris 17-18)
    // const navigateToUnit = (unitId: number | string) => { 
    
    // Perbaikan: Menggunakan sintaks objek untuk navigasi dinamis
    router.push({
      pathname: '/activity/[unitId]/talk',
      params: { unitId: unitId.toString() } 
    });
  }; // <--- Kurung kurawal fungsi `MapsToUnit` sekarang ditutup dengan benar di sini

  return (
    <View style={styles.container}>
      {/* Layer Header Kustom */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DefiAcademy</Text>
        <Text style={styles.headerXP}>666 XP</Text>
      </View>

      <Text style={styles.courseTitle}>COURSE 1, UNIT 1</Text>
      <Text style={styles.courseSubtitle}>Language & Literacy</Text>
      
      {/* Layer Peta Unit (Diamond Grid) */}
      <ScrollView contentContainerStyle={styles.unitMapContainer}>
        <View style={styles.diamondGrid}>
          {units.map((unit) => (
            <DiamondUnit
              key={unit.id}
              unitNumber={unit.number}
              isLocked={unit.locked}
              onPress={() => navigateToUnit(unit.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... (Styling tetap sama)
  container: {
    flex: 1,
    backgroundColor: '#c1f0f0', // Warna background
    paddingTop: 50, // Untuk mengakomodasi Safe Area
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005f6b',
  },
  headerXP: {
    fontSize: 16,
    color: '#00ccaa',
    fontWeight: 'bold',
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#005f6b',
  },
  courseSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#005f6b',
    marginBottom: 20,
  },
  unitMapContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  diamondGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});