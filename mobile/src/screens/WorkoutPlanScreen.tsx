import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, TabParamList } from '../navigation/AppNavigator';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Workout'>,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: NavigationProp;
};

const muscleGroups = [
  { id: 'chest', name: 'Chest', icon: 'C' },
  { id: 'back', name: 'Back', icon: 'B' },
  { id: 'shoulders', name: 'Shoulders', icon: 'S' },
  { id: 'arms', name: 'Arms', icon: 'A' },
  { id: 'legs', name: 'Legs', icon: 'L' },
  { id: 'abs', name: 'Abs', icon: 'AB' },
];

const workoutPlans: { [key: string]: any[] } = {
  chest: [
    { name: 'Bench Press', sets: 4, reps: '8-12', rest: '90s' },
    { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '60s' },
    { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '60s' },
    { name: 'Push-ups', sets: 3, reps: '15-20', rest: '45s' },
  ],
  back: [
    { name: 'Pull-ups', sets: 4, reps: '6-10', rest: '90s' },
    { name: 'Barbell Rows', sets: 4, reps: '8-12', rest: '90s' },
    { name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: '60s' },
    { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '45s' },
  ],
  shoulders: [
    { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
    { name: 'Lateral Raises', sets: 3, reps: '12-15', rest: '60s' },
    { name: 'Front Raises', sets: 3, reps: '12-15', rest: '60s' },
    { name: 'Rear Delt Flyes', sets: 3, reps: '15-20', rest: '45s' },
  ],
  arms: [
    { name: 'Barbell Curls', sets: 3, reps: '10-12', rest: '60s' },
    { name: 'Tricep Dips', sets: 3, reps: '8-12', rest: '60s' },
    { name: 'Hammer Curls', sets: 3, reps: '10-12', rest: '60s' },
    { name: 'Overhead Tricep Extension', sets: 3, reps: '12-15', rest: '60s' },
  ],
  legs: [
    { name: 'Squats', sets: 4, reps: '8-12', rest: '120s' },
    { name: 'Romanian Deadlifts', sets: 4, reps: '8-12', rest: '90s' },
    { name: 'Leg Press', sets: 3, reps: '12-15', rest: '90s' },
    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '60s' },
  ],
  abs: [
    { name: 'Planks', sets: 3, reps: '60s hold', rest: '45s' },
    { name: 'Bicycle Crunches', sets: 3, reps: '20-25', rest: '45s' },
    { name: 'Leg Raises', sets: 3, reps: '12-15', rest: '60s' },
    { name: 'Russian Twists', sets: 3, reps: '20-30', rest: '45s' },
  ],
};

export default function WorkoutPlanScreen({ navigation }: Props) {
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);
  const [showPlan, setShowPlan] = useState(false);

  const toggleMuscle = (muscleId: string) => {
    if (selectedMuscles.includes(muscleId)) {
      setSelectedMuscles(selectedMuscles.filter((m) => m !== muscleId));
    } else {
      setSelectedMuscles([...selectedMuscles, muscleId]);
    }
    setShowPlan(false);
  };

  const generatePlan = () => {
    if (selectedMuscles.length === 0) return;
    setShowPlan(true);
  };

  const getWorkoutPlan = () => {
    const plan: any[] = [];
    selectedMuscles.forEach((muscle) => {
      if (workoutPlans[muscle]) {
        plan.push({
          muscle: muscleGroups.find((m) => m.id === muscle)?.name,
          exercises: workoutPlans[muscle],
        });
      }
    });
    return plan;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Custom Workout Plan</Text>
          <Text style={styles.subtitle}>
            Select the muscles you want to train
          </Text>
        </View>

        {/* Muscle Group Selection */}
        <View style={styles.muscleGrid}>
          {muscleGroups.map((muscle) => (
            <TouchableOpacity
              key={muscle.id}
              style={[
                styles.muscleCard,
                selectedMuscles.includes(muscle.id) && styles.muscleCardSelected,
              ]}
              onPress={() => toggleMuscle(muscle.id)}
            >
              <View style={styles.muscleIconContainer}>
                <Text
                  style={[
                    styles.muscleIcon,
                    selectedMuscles.includes(muscle.id) && styles.muscleIconSelected,
                  ]}
                >
                  {muscle.icon}
                </Text>
              </View>
              <Text
                style={[
                  styles.muscleName,
                  selectedMuscles.includes(muscle.id) && styles.muscleNameSelected,
                ]}
              >
                {muscle.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Generate Plan Button */}
        {selectedMuscles.length > 0 && (
          <TouchableOpacity style={styles.generateButton} onPress={generatePlan}>
            <Text style={styles.generateButtonText}>
              Generate Plan ({selectedMuscles.length} muscle
              {selectedMuscles.length > 1 ? 's' : ''})
            </Text>
          </TouchableOpacity>
        )}

        {/* Workout Plan */}
        {showPlan && (
          <View style={styles.planSection}>
            <Text style={styles.planTitle}>Your Workout Plan</Text>

            {getWorkoutPlan().map((group, groupIndex) => (
              <View key={groupIndex} style={styles.muscleSection}>
                <Text style={styles.muscleSectionTitle}>{group.muscle}</Text>

                {group.exercises.map((exercise: any, exerciseIndex: number) => (
                  <View key={exerciseIndex} style={styles.exerciseCard}>
                    <View style={styles.exerciseHeader}>
                      <Text style={styles.exerciseName}>{exercise.name}</Text>
                    </View>
                    <View style={styles.exerciseDetails}>
                      <View style={styles.exerciseDetail}>
                        <Text style={styles.detailLabel}>Sets</Text>
                        <Text style={styles.detailValue}>{exercise.sets}</Text>
                      </View>
                      <View style={styles.exerciseDetail}>
                        <Text style={styles.detailLabel}>Reps</Text>
                        <Text style={styles.detailValue}>{exercise.reps}</Text>
                      </View>
                      <View style={styles.exerciseDetail}>
                        <Text style={styles.detailLabel}>Rest</Text>
                        <Text style={styles.detailValue}>{exercise.rest}</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}

            {/* Workout Summary */}
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Workout Summary</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total Exercises</Text>
                <Text style={styles.summaryValue}>
                  {getWorkoutPlan().reduce(
                    (sum, group) => sum + group.exercises.length,
                    0
                  )}
                </Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Estimated Time</Text>
                <Text style={styles.summaryValue}>
                  {getWorkoutPlan().reduce(
                    (sum, group) => sum + group.exercises.length,
                    0
                  ) * 5}{' '}
                  mins
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  muscleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  muscleCard: {
    width: '30%',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  muscleCardSelected: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  muscleIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  muscleIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  muscleIconSelected: {
    color: '#000000',
  },
  muscleName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  muscleNameSelected: {
    color: '#ffffff',
  },
  generateButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  generateButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  planSection: {
    marginTop: 8,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  muscleSection: {
    marginBottom: 24,
  },
  muscleSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  exerciseCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  exerciseHeader: {
    marginBottom: 12,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  exerciseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exerciseDetail: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  summaryCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 15,
    color: '#6b7280',
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
});
