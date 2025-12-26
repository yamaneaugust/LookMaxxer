import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, TabParamList } from '../navigation/AppNavigator';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'FaceScanner'>,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: NavigationProp;
};

export default function FaceScannerScreen({ navigation }: Props) {
  const [hasScanned, setHasScanned] = useState(false);
  const [scanResults, setScanResults] = useState({
    pslScore: 0,
    acneCount: 0,
    skinQuality: '',
    recommendations: [] as string[],
  });

  const handleScanFace = () => {
    // Navigate to camera for face scan
    navigation.navigate('Camera', { type: 'face' });

    // Mock results for demo (will be replaced with AI)
    setTimeout(() => {
      setHasScanned(true);
      setScanResults({
        pslScore: 6.5,
        acneCount: 12,
        skinQuality: 'Moderate',
        recommendations: [
          'Use a gentle cleanser twice daily',
          'Apply benzoyl peroxide spot treatment',
          'Increase water intake to 8 glasses/day',
          'Consider adding retinol to nighttime routine',
          'Reduce dairy consumption',
        ],
      });
    }, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Face Scanner</Text>
          <Text style={styles.subtitle}>
            Analyze your face for acne and get personalized recommendations
          </Text>
        </View>

        {/* Scan Button */}
        <TouchableOpacity style={styles.scanButton} onPress={handleScanFace}>
          <View style={styles.scanIconContainer}>
            <Text style={styles.scanIcon}>📸</Text>
          </View>
          <Text style={styles.scanButtonText}>Scan Your Face</Text>
          <Text style={styles.scanButtonSubtext}>
            AI-powered facial analysis
          </Text>
        </TouchableOpacity>

        {/* Results Section */}
        {hasScanned && (
          <>
            {/* PSL Score Card */}
            <View style={styles.resultCard}>
              <Text style={styles.cardTitle}>PSL Score</Text>
              <View style={styles.scoreContainer}>
                <Text style={styles.scoreNumber}>{scanResults.pslScore}</Text>
                <Text style={styles.scoreOutOf}>/10</Text>
              </View>
              <Text style={styles.scoreDescription}>
                Your aesthetic rating based on facial symmetry and proportions
              </Text>
            </View>

            {/* Acne Analysis Card */}
            <View style={styles.resultCard}>
              <Text style={styles.cardTitle}>Acne Detection</Text>
              <View style={styles.acneStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{scanResults.acneCount}</Text>
                  <Text style={styles.statLabel}>Spots Detected</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{scanResults.skinQuality}</Text>
                  <Text style={styles.statLabel}>Skin Quality</Text>
                </View>
              </View>
            </View>

            {/* Recommendations Card */}
            <View style={styles.resultCard}>
              <Text style={styles.cardTitle}>Personalized Recommendations</Text>
              {scanResults.recommendations.map((rec, index) => (
                <View key={index} style={styles.recommendationItem}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.recommendationText}>{rec}</Text>
                </View>
              ))}
            </View>

            {/* Rescan Button */}
            <TouchableOpacity
              style={styles.rescanButton}
              onPress={handleScanFace}
            >
              <Text style={styles.rescanButtonText}>Scan Again</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Info Section */}
        {!hasScanned && (
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>What is PSL?</Text>
            <Text style={styles.infoText}>
              PSL (Pretty Scale / Looks) is an aesthetic rating system that
              analyzes facial symmetry, proportions, and features to provide an
              objective attractiveness score.
            </Text>

            <Text style={styles.infoTitle}>How it works</Text>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>1</Text>
              <Text style={styles.stepText}>
                Take a clear photo of your face
              </Text>
            </View>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>2</Text>
              <Text style={styles.stepText}>
                AI analyzes facial features and skin condition
              </Text>
            </View>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>3</Text>
              <Text style={styles.stepText}>
                Get your PSL score and personalized recommendations
              </Text>
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
    lineHeight: 22,
  },
  scanButton: {
    backgroundColor: '#000000',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
  },
  scanIconContainer: {
    marginBottom: 16,
  },
  scanIcon: {
    fontSize: 48,
  },
  scanButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  scanButtonSubtext: {
    color: '#9ca3af',
    fontSize: 14,
  },
  resultCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginBottom: 12,
  },
  scoreNumber: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#000000',
  },
  scoreOutOf: {
    fontSize: 24,
    color: '#6b7280',
    marginLeft: 4,
  },
  scoreDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  acneStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 16,
  },
  recommendationItem: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingRight: 8,
  },
  bulletPoint: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 12,
    width: 16,
  },
  recommendationText: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
    lineHeight: 22,
  },
  rescanButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#000000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  rescanButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSection: {
    marginTop: 8,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 16,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 12,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepNumber: {
    width: 32,
    height: 32,
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: 16,
    textAlign: 'center',
    lineHeight: 32,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
  },
  stepText: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
  },
});
