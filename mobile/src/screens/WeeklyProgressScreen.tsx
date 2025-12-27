import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WeeklyProgressScreen() {
  // Mock data - will be replaced with real data
  const weekDays = [
    { day: 'S', date: 27, active: false },
    { day: 'M', date: 28, active: false },
    { day: 'T', date: 29, active: false },
    { day: 'W', date: 30, active: false },
    { day: 'T', date: 1, active: true },
    { day: 'F', date: 2, active: false },
    { day: 'S', date: 3, active: false },
  ];

  const weeklyStats = {
    caloriesConsumed: 9845,
    caloriesGoal: 10000,
    caloriesBurned: 332,
    weight: 75,
    weightChange: -0.5,
    mealsLogged: 18,
    photosUploaded: 3,
  };

  const recentMeals = [
    { name: 'Eggs, Avocado, and Toast', time: '12:47 PM', calories: 450, macros: { protein: 20, carbs: 40, fat: 24 } },
    { name: 'Weight lifting', time: '12:42 PM', calories: 50, type: 'exercise' },
  ];

  const progress = (weeklyStats.caloriesConsumed / weeklyStats.caloriesGoal) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Weekly Progress</Text>
        </View>

        {/* Week Calendar */}
        <View style={styles.weekCalendar}>
          {weekDays.map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dayItem, day.active && styles.dayItemActive]}
            >
              <Text style={[styles.dayText, day.active && styles.dayTextActive]}>
                {day.day}
              </Text>
              <Text style={[styles.dateText, day.active && styles.dateTextActive]}>
                {day.date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Calories Progress */}
        <View style={styles.caloriesSection}>
          <View style={styles.caloriesRow}>
            <View>
              <Text style={styles.caloriesNumber}>
                {weeklyStats.caloriesConsumed.toLocaleString()}
              </Text>
              <Text style={styles.caloriesSubtext}>
                /{weeklyStats.caloriesGoal.toLocaleString()}
              </Text>
              <Text style={styles.caloriesLabel}>Eaten today</Text>
            </View>

            {/* Circular Progress */}
            <View style={styles.progressCircle}>
              <View style={styles.progressCircleInner}>
                <Text style={styles.progressText}>{Math.round(progress)}%</Text>
              </View>
            </View>
          </View>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View>
                <Text style={styles.statNumber}>{weeklyStats.caloriesBurned}</Text>
                <Text style={styles.statLabel}>Calories burned</Text>
              </View>
            </View>

            <View style={styles.statItem}>
              <View>
                <Text style={styles.statNumber}>{weeklyStats.weight}kg</Text>
                <Text style={styles.statLabel}>
                  {weeklyStats.weightChange > 0 ? '+' : ''}
                  {weeklyStats.weightChange}kg
                </Text>
              </View>
            </View>

            <View style={styles.statItem}>
              <View>
                <Text style={styles.statNumber}>{weeklyStats.photosUploaded}</Text>
                <Text style={styles.statLabel}>Photos</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Recently Logged */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recently logged</Text>

          {recentMeals.map((meal, index) => (
            <View key={index} style={styles.mealCard}>
              <View style={styles.mealInfo}>
                <Text style={styles.mealName}>{meal.name}</Text>
                <View style={styles.mealStats}>
                  <Text style={styles.mealCalories}>{meal.calories} calories</Text>
                  {meal.macros && (
                    <View style={styles.macrosRow}>
                      <Text style={styles.macroText}>P: {meal.macros.protein}g</Text>
                      <Text style={styles.macroText}>C: {meal.macros.carbs}g</Text>
                      <Text style={styles.macroText}>F: {meal.macros.fat}g</Text>
                    </View>
                  )}
                  {meal.type === 'exercise' && (
                    <Text style={styles.exerciseLabel}>
                      Intensity: Medium • 15 Mins
                    </Text>
                  )}
                </View>
              </View>
              <Text style={styles.mealTime}>{meal.time}</Text>
            </View>
          ))}
        </View>

        {/* Weekly Summary */}
        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>This Week's Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Meals Logged</Text>
              <Text style={styles.summaryValue}>{weeklyStats.mealsLogged}</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Avg Daily Calories</Text>
              <Text style={styles.summaryValue}>
                {Math.round(weeklyStats.caloriesConsumed / 7)}
              </Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Weight Change</Text>
              <Text style={[styles.summaryValue, { color: weeklyStats.weightChange < 0 ? '#10b981' : '#000' }]}>
                {weeklyStats.weightChange > 0 ? '+' : ''}{weeklyStats.weightChange}kg
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    padding: 20,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  weekCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  dayItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  dayItemActive: {
    backgroundColor: '#000000',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: 4,
  },
  dayTextActive: {
    color: '#ffffff',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  dateTextActive: {
    color: '#ffffff',
  },
  caloriesSection: {
    padding: 20,
    backgroundColor: '#f9fafb',
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  caloriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  caloriesNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  caloriesSubtext: {
    fontSize: 16,
    color: '#6b7280',
  },
  caloriesLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 4,
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressCircleInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  statLabel: {
    fontSize: 11,
    color: '#6b7280',
  },
  recentSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  mealCard: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  mealStats: {
    gap: 4,
  },
  mealCalories: {
    fontSize: 13,
    color: '#000000',
    fontWeight: '600',
  },
  macrosRow: {
    flexDirection: 'row',
    gap: 8,
  },
  macroText: {
    fontSize: 11,
    color: '#6b7280',
  },
  exerciseLabel: {
    fontSize: 11,
    color: '#6b7280',
  },
  mealTime: {
    fontSize: 11,
    color: '#9ca3af',
  },
  summarySection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  summaryCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 4,
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: '300',
  },
});
