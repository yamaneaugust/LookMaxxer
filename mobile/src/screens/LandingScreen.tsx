import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Landing'>;
};

export default function LandingScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>LookMaxxer</Text>
          <Text style={styles.subtitle}>AI-Powered Fitness Tracker</Text>
        </View>

        <View style={styles.features}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>AI Food Recognition</Text>
            <Text style={styles.featureText}>
              Snap a photo of your meal for instant calorie tracking
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Face Scanner</Text>
            <Text style={styles.featureText}>
              PSL analysis, acne detection, and personalized skincare tips
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Track Progress</Text>
            <Text style={styles.featureText}>
              Monitor nutrition, weight, and body transformation
            </Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Onboarding')}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('MainTabs')}
          >
            <Text style={styles.secondaryButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#6b7280',
    marginBottom: 20,
  },
  features: {
    gap: 15,
  },
  featureCard: {
    backgroundColor: '#f9fafb',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  buttons: {
    gap: 12,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  secondaryButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
