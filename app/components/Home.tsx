import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Bluetooth, Ear, Brain, Mic, Minus } from "lucide-react-native";

const { width } = Dimensions.get("window");

export default function MobileUI() {
  const [activeTab, setActiveTab] = useState<"device" | "ai">("device");
  const [isBluetoothConnected, setIsBluetoothConnected] = useState(false);

  const circleSize = Math.min(Math.max(width * 0.25, 120), 160);
  const iconSize = Math.min(Math.max(width * 0.15, 60), 100);

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.title}>AIR ASSIST</Text>
        <Minus color="#9ca3af" size={16} />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {activeTab === "device" && (
          <>
            <View style={styles.iconContainer}>
              <View
                style={[
                  styles.circle,
                  isBluetoothConnected
                    ? styles.circleConnected
                    : styles.circleDisconnected,
                  { width: circleSize, height: circleSize },
                ]}
              >
                <Bluetooth
                  size={iconSize}
                  color={isBluetoothConnected ? "#60a5fa" : "#9ca3af"}
                />
              </View>
            </View>
            <Text style={styles.statusText}>
              {isBluetoothConnected ? "Connected" : "Disconnected"}
            </Text>
          </>
        )}

        {activeTab === "ai" && (
          <>
            <View style={styles.iconContainer}>
              <View
                style={[
                  styles.circle,
                  styles.circleAI,
                  { width: circleSize, height: circleSize },
                ]}
              >
                <Brain size={iconSize} color="#60a5fa" />
              </View>
            </View>
            <Text style={styles.statusText}>AI Active</Text>
          </>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          onPress={() => {
            setActiveTab("device");
            setIsBluetoothConnected(!isBluetoothConnected);
          }}
          style={[
            styles.tabButton,
            activeTab === "device" ? styles.tabActive : styles.tabInactive,
          ]}
        >
          <Ear size={iconSize * 0.6} color="#fff" />
          <Text style={styles.tabLabel}>Device</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("ai")}
          style={[
            styles.tabButton,
            activeTab === "ai" ? styles.tabActive : styles.tabInactive,
          ]}
        >
          <Brain size={iconSize * 0.6} color="#fff" />
          <Text style={styles.tabLabel}>AI</Text>
        </TouchableOpacity>
      </View>

      {/* Start Listening Button */}
      <TouchableOpacity style={styles.listenButton}>
        <Mic size={18} color="#fff" />
        <Text style={styles.listenText}>Start Listening</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0F",
    paddingHorizontal: 16,
    paddingTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  mainContent: {
    alignItems: "center",
    marginTop: 20,
  },
  iconContainer: {
    backgroundColor: "#1A1A1A",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#1A73E8",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  circle: {
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  circleConnected: {
    backgroundColor: "rgba(37,99,235,0.2)",
    shadowColor: "#1A73E8",
    shadowOpacity: 0.5,
  },
  circleDisconnected: {
    backgroundColor: "#1f2937",
    shadowColor: "red",
    shadowOpacity: 0.4,
  },
  circleAI: {
    backgroundColor: "#1A1A1A",
    shadowColor: "#1A73E8",
    shadowOpacity: 0.5,
  },
  statusText: {
    marginTop: 12,
    fontSize: 16,
    color: "#d1d5db",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 9999,
    backgroundColor: "#1A1A1A",
    fontWeight: "600",
    overflow: "hidden",
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
    marginTop: 20,
    justifyContent: "space-between",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: "rgba(37,99,235,0.3)",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  tabInactive: {
    backgroundColor: "rgba(31,41,55,0.6)",
  },
  tabLabel: {
    marginTop: 8,
    fontSize: 13,
    color: "#fff",
  },
  listenButton: {
    flexDirection: "row",
    paddingHorizontal: 60,
    borderWidth: 1,
    borderColor: "#1A73E8",
    borderRadius: 16,
    paddingVertical: 16,
    width: "120%",
    marginBottom: 20,
    backgroundColor: "#1A1A1A",
    shadowColor: "#1A73E8",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  listenText: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 14,
  },
});
