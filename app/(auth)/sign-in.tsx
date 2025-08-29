import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Field from "@/components/Field";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
    return (
        <SafeAreaView className="flex-1 bg-white flex-col py-4 gap-y-4">
            <View className="flex-1 justify-center px-8 flex-col gap-y-14">
                <View className="flex flex-col gap-y-1">
                    <View className="flex flex-row items-center gap-x-1">
                        <Text className="text-gray-600 font-JakartaExtraBold text-2xl">
                            Jesus Rock of Ages
                        </Text>
                        <Text className="text-[#c13a3f] font-JakartaExtraBold text-2xl">
                            Ministries
                        </Text>
                    </View>
                    <Text className="font-JakartaLight">
                        Attendance monitoring app
                    </Text>
                </View>
                <View className="flex flex-col gap-y-9">
                    <View className="flex flex-col gap-y-4">
                        <Dropdown
                            label="Pastoral Care Group"
                            options={[
                                { label: "Option 1", value: "1" },
                                { label: "Option 2", value: "2" },
                            ]}
                            variant="filled"
                            value=""
                            onSelect={(value) => {}}
                        />
                        <Field
                            label="Email"
                            variant="filled"
                            onChangeText={(value) => {}}
                        />
                        <Field
                            label="Password"
                            secureTextEntry
                            variant="filled"
                            onChangeText={(value) => {}}
                        />
                    </View>
                    <Button
                        label="Login"
                        color="#C13A3E"
                        variant="contained"
                        rounded
                        uppercase
                        onPress={() => router.push("/(root)/dashboard")}
                    />
                </View>
            </View>
            <Text className="text-sm text-gray-400 text-center">
                Developed by Paul John Judan
            </Text>
        </SafeAreaView>
    );
};

export default SignIn;
