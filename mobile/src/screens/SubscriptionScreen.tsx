import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Subscription'>;
};

export default function SubscriptionScreen({ navigation }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const handleStartTrial = () => {
    // Navigate to main app
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Start Your Free Trial</Text>
          <Text style={styles.subtitle}>
            3 days free, then choose your plan
          </Text>
        </View>

        {/* Features List */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>AI-powered food recognition</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Calorie and macro tracking</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Face scan with PSL analysis</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Acne detection & suggestions</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Progress photo tracking</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Unlimited AI insights</Text>
          </View>
        </View>

        {/* Pricing Plans */}
        <View style={styles.plansContainer}>
          {/* Yearly Plan - Most Popular */}
          <TouchableOpacity
            style={[
              styles.planCard,
              selectedPlan === 'yearly' && styles.planCardSelected,
            ]}
            onPress={() => setSelectedPlan('yearly')}
          >
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>MOST POPULAR</Text>
            </View>
            <View style={styles.planHeader}>
              <Text style={styles.planName}>Yearly</Text>
              <Text style={styles.planPrice}>$100</Text>
              <Text style={styles.planPeriod}>per year</Text>
            </View>
            <View style={styles.savingsBadge}>
              <Text style={styles.savingsText}>Save $140/year</Text>
            </View>
            <Text style={styles.planDetail}>$8.33/month billed annually</Text>
          </TouchableOpacity>

          {/* Monthly Plan */}
          <TouchableOpacity
            style={[
              styles.planCard,
              selectedPlan === 'monthly' && styles.planCardSelected,
            ]}
            onPress={() => setSelectedPlan('monthly')}
          >
            <View style={styles.planHeader}>
              <Text style={styles.planName}>Monthly</Text>
              <Text style={styles.planPrice}>$20</Text>
              <Text style={styles.planPeriod}>per month</Text>
            </View>
            <Text style={styles.planDetail}>Billed monthly</Text>
          </TouchableOpacity>
        </View>

        {/* CTA Button */}
        <TouchableOpacity style={styles.ctaButton} onPress={handleStartTrial}>
          <Text style={styles.ctaButtonText}>Start 3-Day Free Trial</Text>
        </TouchableOpacity>

        {/* Fine Print */}
        <Text style={styles.finePrint}>
          After your 3-day free trial, you'll be charged{' '}
          {selectedPlan === 'yearly' ? '$100/year' : '$20/month'}.{'\n'}
          Cancel anytime before trial ends.
        </Text>

        <TouchableOpacity onPress={() => navigation.replace('MainTabs')}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
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
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
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
  featuresContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 12,
    width: 24,
  },
  featureText: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
  },
  plansContainer: {
    marginBottom: 24,
  },
  planCard: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    position: 'relative',
  },
  planCardSelected: {
    borderColor: '#000000',
    backgroundColor: '#f9fafb',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  planHeader: {
    alignItems: 'center',
    marginBottom: 12,
  },
  planName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
  },
  planPeriod: {
    fontSize: 16,
    color: '#6b7280',
  },
  savingsBadge: {
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 8,
  },
  savingsText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  planDetail: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#000000',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  finePrint: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  skipText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
