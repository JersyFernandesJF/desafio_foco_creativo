import { useAuthStore } from "@/data/stores/user/user-data";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export const HomeScreen: React.FC = () => {
  const { user, setUser } = useAuthStore();
  const route = useRoute();

  const handleLogout = () => {
    console.log(route);
    setUser(null);
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Text>Welcome, {user.name}!</Text>
          {user.picture && (
            <Image source={{ uri: user.picture }} style={styles.image} />
          )}
          <Text>Email: {user.email}</Text>
          <TouchableOpacity
            className="flex flex-row items-center justify-center rounded-xl bg-[#000] px-6 py-4 mt-4"
            onPress={() => handleLogout()}
          >
            <Text className="text-base font-medium text-white ml-3">
              Logout
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
});
