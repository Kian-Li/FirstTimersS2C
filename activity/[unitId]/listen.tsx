import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Data Pilihan Ganda Dummy
const choices = [
  { key: 'A', text: 'A. _____' },
  { key: 'B', text: 'B. _____' },
  { key: 'C', key: 'C. _____' },
  { key: 'D', text: 'D. _____' },
];

export default function ListenActivityScreen() {
  const { unitId } = useLocalSearchParams();
  const finalUnitId = Array.isArray(unitId) ? unitId[0] : unitId || '1';
  
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [speed, setSpeed] = useState<'normal' | 'slower'>('normal');

  const handleCheck = () => {
    if (selectedChoice) {
      alert(`Jawaban terpilih: ${selectedChoice}. Implementasi logika cek jawaban di sini.`);
    } else {
      alert("Pilih salah satu jawaban terlebih dahulu!");
    }
  };

  const handlePlayAudio = (currentSpeed: 'normal' | 'slower') => {
    alert(`Memutar audio Unit ${finalUnitId} dengan kecepatan: ${currentSpeed.toUpperCase()}`);
    // Di sini Anda akan mengimplementasikan pemutaran audio
  };

  const choiceStyle = (key: string) => [
    styles.choiceButton,
    selectedChoice === key && styles.choiceSelected,
  ];

  return (
    <View style={styles.container}>
      {/* Konten Utama */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.instructionText}>Dengarkan kalimat berikut:</Text>

        {/* Kontrol Kecepatan */}
        <View style={styles.speedControls}>
          <TouchableOpacity 
            style={[styles.speedButton, speed === 'normal' && styles.speedActive]}
            onPress={() => { setSpeed('normal'); handlePlayAudio('normal'); }}
          >
            <Text style={styles.speedText}>NORMAL</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.speedButton, speed === 'slower' && styles.speedActive]}
            onPress={() => { setSpeed('slower'); handlePlayAudio('slower'); }}
          >
            <Text style={styles.speedText}>SLOWER</Text>
          </TouchableOpacity>
        </View>

        {/* Soal Pilihan Ganda */}
        <View style={styles.choicesContainer}>
          {choices.map((choice) => (
            <TouchableOpacity
              key={choice.key}
              style={choiceStyle(choice.key)}
              onPress={() => setSelectedChoice(choice.key)}
            >
              <Text style={styles.choiceText}>{choice.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      {/* Tombol CHECK (Footer Aksi) */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkButton} onPress={handleCheck} disabled={!selectedChoice}>
          <Text style={styles.checkButtonText}>CHECK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1f0f0', // Warna background
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: '#005f6b',
    marginBottom: 20,
  },
  // --- Kontrol Kecepatan ---
  speedControls: {
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 20,
    justifyContent: 'center',
    width: '100%',
  },
  speedButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#00ccaa',
    minWidth: 120,
    alignItems: 'center',
  },
  speedActive: {
    backgroundColor: '#00ccaa', // Hijau Toska saat aktif
    borderColor: '#00ccaa',
  },
  speedText: {
    color: '#005f6b',
    fontWeight: 'bold',
  },
  // --- Pilihan Ganda ---
  choicesContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  choiceButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 60,
    justifyContent: 'center',
  },
  choiceSelected: {
    borderColor: '#00ccaa', // Border Toska saat dipilih
    borderWidth: 2,
    backgroundColor: '#e6fffa', // Sedikit warna latar saat dipilih
  },
  choiceText: {
    fontSize: 18,
    color: '#005f6b',
  },
  // --- Footer ---
  footer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  checkButton: {
    backgroundColor: '#00ccaa',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});