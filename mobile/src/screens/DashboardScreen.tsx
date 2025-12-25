import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
};

export default function DashboardScreen({ navigation }: Props) {
  // Mock data - will be replaced with real data from API
  const dailyCalories = 1850;
  const calorieGoal = 2000;
  const currentWeight = 75;
  const goalWeight = 70;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Daily Calories Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Calories</Text>
          <View style={styles.calorieProgress}>
            <Text style={styles.calorieNumber}>{dailyCalories}</Text>
            <Text style={styles.calorieGoal}>/ {calorieGoal} kcal</Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${(dailyCalories / calorieGoal) * 100}%` },
              ]}
            />
          </View>
          <Text style={styles.caloriesRemaining}>
            {calorieGoal - dailyCalories} calories remaining
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsGrid}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Camera', { type: 'food' })}
          >
            <Text style={styles.actionIcon}>📸</Text>
            <Text style={styles.actionText}>Log Meal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('FoodLog')}
          >
            <Text style={styles.actionIcon}>📊</Text>
            <Text style={styles.actionText}>View Log</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Progress')}
          >
            <Text style={styles.actionIcon}>📈</Text>
            <Text style={styles.actionText}>Progress</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Camera', { type: 'progress' })}
          >
            <Text style={styles.actionIcon}>🖼️</Text>
            <Text style={styles.actionText}>Take Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Weight Progress Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weight Progress</Text>
          <View style={styles.weightStats}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Current</Text>
              <Text style={styles.statValue}>{currentWeight} kg</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Goal</Text>
              <Text style={styles.statValue}>{goalWeight} kg</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>To Go</Text>
              <Text style={[styles.statValue, { color: '#3b82f6' }]}>
                {currentWeight - goalWeight} kg
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Meals */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Meals</Text>
          <Text style={styles.emptyState}>
            No meals logged yet. Start by taking a photo of your meal!
          </Text>
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
  card: {
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
  calorieProgress: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  calorieNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  calorieGoal: {
    fontSize: 18,
    color: '#6b7280',
    marginLeft: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  caloriesRemaining: {
    fontSize: 14,
    color: '#6b7280',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  actionCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  weightStats: {
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e5e7eb',
  },
  emptyState: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
