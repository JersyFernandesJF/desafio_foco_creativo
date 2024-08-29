import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useAuthStore } from "@/data/stores/user/user-data";
import { useNavigationSwitcher } from "@/helpers/navigation";
import { useAuth } from "@/lib/providers/AuthProvider";

WebBrowser.maybeCompleteAuthSession();

export const AuthScreen: React.FC = () => {
  const { signUp } = useAuth();
  const { publicNavigation, privateNavigation } = useNavigationSwitcher();

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "942364776611-nvvrm0dqrocnj8n4am2ltbpt472ik16u.apps.googleusercontent.com",
    androidClientId:
      "942364776611-t5jmpapflei7bgk0ghkt9psd0092dui6.apps.googleusercontent.com",
    webClientId:
      "942364776611-skusp7bsbfphdhjlh4e8hlrq3e7jl677.apps.googleusercontent.com",
  });

  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication?.accessToken) {
        fetch("https://www.googleapis.com/userinfo/v2/me", {
          headers: { Authorization: `Bearer ${authentication.accessToken}` },
        })
          .then((res) => res.json())
          .then((user) => {
            setUser({
              id: user.id,
              name: user.name,
              email: user.email,
              picture: user.picture,
              accessToken: authentication.accessToken,
            });
            signUp(user).then((resp) => console.log(resp));
            privateNavigation.navigate("PRIVATE", {
              screen: "HOME",
            });
          });
      }
    }
  }, [response]);

  return (
    <View className="flex flex-1 bg-white justify-center items-center">
      <TouchableOpacity
        className=" flex flex-row items-center justify-center rounded-xl bg-[#000] px-6 py-4"
        onPress={() => promptAsync()}
      >
        <Text className="text-base font-medium text-white ml-3">
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
