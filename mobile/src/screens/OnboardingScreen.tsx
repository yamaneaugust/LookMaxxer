import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
};

export default function OnboardingScreen({ navigation }: Props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    goalWeight: '',
    goalType: '',
    activityLevel: '',
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Save data and navigate to dashboard
      navigation.navigate('Dashboard');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Tell us about yourself</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                placeholder="25"
                keyboardType="numeric"
                value={formData.age}
                onChangeText={(text) => setFormData({ ...formData, age: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Height (cm)</Text>
              <TextInput
                style={styles.input}
                placeholder="175"
                keyboardType="numeric"
                value={formData.height}
                onChangeText={(text) => setFormData({ ...formData, height: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Current Weight (kg)</Text>
              <TextInput
                style={styles.input}
                placeholder="75"
                keyboardType="numeric"
                value={formData.weight}
                onChangeText={(text) => setFormData({ ...formData, weight: text })}
              />
            </View>
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>What's your goal?</Text>

            <TouchableOpacity
              style={[
                styles.optionButton,
                formData.goalType === 'lose' && styles.optionButtonActive,
              ]}
              onPress={() => setFormData({ ...formData, goalType: 'lose' })}
            >
              <Text style={styles.optionText}>Lose Weight</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                formData.goalType === 'gain' && styles.optionButtonActive,
              ]}
              onPress={() => setFormData({ ...formData, goalType: 'gain' })}
            >
              <Text style={styles.optionText}>Build Muscle</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                formData.goalType === 'maintain' && styles.optionButtonActive,
              ]}
              onPress={() => setFormData({ ...formData, goalType: 'maintain' })}
            >
              <Text style={styles.optionText}>Maintain Weight</Text>
            </TouchableOpacity>

            {formData.goalType !== 'maintain' && (
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Goal Weight (kg)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="70"
                  keyboardType="numeric"
                  value={formData.goalWeight}
                  onChangeText={(text) =>
                    setFormData({ ...formData, goalWeight: text })
                  }
                />
              </View>
            )}
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Activity Level</Text>

            <TouchableOpacity
              style={[
                styles.optionButton,
                formData.activityLevel === 'sedentary' && styles.optionButtonActive,
              ]}
              onPress={() =>
                setFormData({ ...formData, activityLevel: 'sedentary' })
              }
            >
              <Text style={styles.optionText}>Sedentary</Text>
              <Text style={styles.optionSubtext}>Little to no exercise</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                formData.activityLevel === 'light' && styles.optionButtonActive,
              ]}
              onPress={() => setFormData({ ...formData, activityLevel: 'light' })}
            >
              <Text style={styles.optionText}>Lightly Active</Text>
              <Text style={styles.optionSubtext}>Exercise 1-3 days/week</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                formData.activityLevel === 'moderate' && styles.optionButtonActive,
              ]}
              onPress={() =>
                setFormData({ ...formData, activityLevel: 'moderate' })
              }
            >
              <Text style={styles.optionText}>Moderately Active</Text>
              <Text style={styles.optionSubtext}>Exercise 3-5 days/week</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                formData.activityLevel === 'very' && styles.optionButtonActive,
              ]}
              onPress={() => setFormData({ ...formData, activityLevel: 'very' })}
            >
              <Text style={styles.optionText}>Very Active</Text>
              <Text style={styles.optionSubtext}>Exercise 6-7 days/week</Text>
            </TouchableOpacity>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(step / 3) * 100}%` }]} />
        </View>

        {renderStep()}

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {step === 3 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    marginBottom: 30,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 2,
  },
  stepContainer: {
    marginBottom: 30,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  optionButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  optionButtonActive: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  optionSubtext: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  nextButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
