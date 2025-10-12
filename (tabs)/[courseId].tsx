import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Anda perlu membuat komponen LessonCard.tsx di components/Unit/
// import LessonCard from '../../components/Unit/LessonCard'; 

// Data Dummy Pelajaran untuk demonstrasi
const lessonData = [
  { id: 1, title: 'Introduction to Tenses', completed: true },
  { id: 2, title: 'Vocabulary Builder', completed: false },
  { id: 3, title: 'Listening Comprehension', completed: false },
  { id: 4, title: 'Sentence Structure', completed: false },
];

export default function CourseDetailScreen() {
  // Mengambil parameter dinamis dari URL (misalnya, dari /tabs/2)
  const { courseId } = useLocalSearchParams();

  // Fungsi untuk navigasi ke Layar Aktivitas (Talk atau Listen)
  const navigateToActivity = (lessonId: number) => {
    
    // --- PERBAIKAN PENTING DI SINI ---
    // 1. Tangani kasus string[] atau undefined.
    // 2. Pastikan nilainya adalah string tunggal sebelum dilewatkan ke params.
    const unitId = Array.isArray(courseId) 
      ? courseId[0] // Ambil elemen pertama jika itu array
      : courseId;   // Jika tidak, gunakan nilainya (bisa string atau undefined)

    if (unitId) { // Hanya navigasi jika unitId bukan null/undefined
        router.push({
          pathname: '/activity/[unitId]/talk',
          // Ubah menjadi string jika perlu (walaupun unitId seharusnya sudah string di sini)
          params: { unitId: unitId.toString() } 
        });
    } else {
        // Opsi: Tambahkan logging atau navigasi ke halaman error jika ID hilang
        console.error("Course ID is missing for navigation.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Layer Header Kustom */}
      <View style={styles.header}>
        {/* Tambahkan pengecekan tipe untuk menampilkan courseId dengan aman */}
        <Text style={styles.headerTitle}>
            COURSE 1, UNIT {Array.isArray(courseId) ? courseId[0] : courseId || '...'}
        </Text>
        <Text style={styles.headerSubtitle}>Language & Literacy</Text>
      </View>

      {/* Layer Daftar Kartu Pelajaran */}
      <ScrollView contentContainerStyle={styles.lessonList}>
        {lessonData.map((lesson) => (
          <TouchableOpacity 
            key={lesson.id} 
            style={[styles.card, lesson.completed && styles.cardCompleted]}
            onPress={() => navigateToActivity(lesson.id)}
          >
            <View style={styles.cardIndicator} /> 
            <Text style={styles.cardText}>{lesson.id}. {lesson.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1f0f0', // Warna background
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#95dada', // Warna Header
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005f6b',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#005f6b',
  },
  lessonList: {
    padding: 20,
    alignItems: 'flex-start', // Kartu dimulai dari kiri
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 250, // Lebar kartu sesuai desain
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    marginLeft: 30, // Geser ke kanan untuk memberi ruang pada indikator
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardCompleted: {
    backgroundColor: '#e6fffa', // Warna lebih terang jika selesai
  },
  cardText: {
    fontSize: 16,
    color: '#005f6b',
  },
  cardIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00ccaa', // Indikator kecil di kiri
    position: 'absolute',
    left: -15, // Posisi di luar kartu
  },
});