import { Image, Pressable, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import Button from "../../components/shared/Button/Button";
import AuthInput from "../../components/shared/Input/Input";
import React, { useContext, useState } from "react";
import { signIn } from "../../util/apiUsers";
import { TokenContext } from "../../contexts/authJWTContext";

type NonAuthStackParamList = {
  NotLoggedCheckout: any;
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthCheckoutRoutes: any;
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type NavigationProp = NativeStackScreenProps<NonAuthStackParamList>;

export default function Login({ navigation }: NavigationProp) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { receiveToken } = useContext(TokenContext);

  const handleSignIn = async () => {
    try {
      const token = await signIn({ email, password });
      receiveToken(token);
    } catch (error: any) {
      alert("Erro durante o registro" + error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/app-images/logo.png")}
      />

      <Image
        style={styles.imageCompass}
        source={require("../../assets/app-images/compass.png")}
      />
      <View style={styles.forms}>
        <AuthInput
          label="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          editable={true}
        />
        <AuthInput
          label="Password"
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          editable={true}
        />
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            title="LOGIN"
            onPress={() => {
              handleSignIn();
              navigation.navigate("BottomTabRoutes");
            }}
          />
          <Pressable
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.textButton}>
              Not have an account yet?{"\n"} Sign up
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          >
            <Text style={styles.textButton}>I forgot my password</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("HomeRoutes");
            }}
          >
            <Text style={styles.textButton}>I don't want to register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
