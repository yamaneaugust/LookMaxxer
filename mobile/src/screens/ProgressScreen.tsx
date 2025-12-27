import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Progress'>;
};

export default function ProgressScreen({ navigation }: Props) {
  // Mock data - will be replaced with real data from API
  const [photos, setPhotos] = useState<any[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Add Photo Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Camera', { type: 'progress' })}
        >
          <Text style={styles.addButtonIcon}>📸</Text>
          <Text style={styles.addButtonText}>Take Progress Photo</Text>
        </TouchableOpacity>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          <Text style={styles.cardTitle}>Your Progress</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Photos Taken</Text>
              <Text style={styles.statValue}>{photos.length}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Days Active</Text>
              <Text style={styles.statValue}>0</Text>
            </View>
          </View>
        </View>

        {/* AI Insights Card */}
        <View style={styles.insightsCard}>
          <Text style={styles.cardTitle}>AI Insights</Text>
          <View style={styles.insightContent}>
            <Text style={styles.insightIcon}>🤖</Text>
            <Text style={styles.insightText}>
              Take your first progress photo to get AI-powered feedback on your
              transformation!
            </Text>
          </View>
        </View>

        {/* Photos Grid */}
        <View style={styles.photosSection}>
          <Text style={styles.sectionTitle}>Photo Timeline</Text>

          {photos.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>🖼️</Text>
              <Text style={styles.emptyText}>No progress photos yet</Text>
              <Text style={styles.emptySubtext}>
                Start documenting your transformation journey
              </Text>
            </View>
          ) : (
            <View style={styles.photosGrid}>
              {photos.map((photo, index) => (
                <View key={index} style={styles.photoCard}>
                  <Image source={{ uri: photo.uri }} style={styles.photoImage} />
                  <Text style={styles.photoDate}>{photo.date}</Text>
                  <Text style={styles.photoWeight}>{photo.weight} kg</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollContent: {
    padding: 16,
  },
  addButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e5e7eb',
  },
  insightsCard: {
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  insightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  insightIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  insightText: {
    flex: 1,
    fontSize: 14,
    color: '#1e40af',
    lineHeight: 20,
  },
  photosSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  emptyState: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
  },
  photosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  photoCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  photoImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  photoDate: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  photoWeight: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
});
