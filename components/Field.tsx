import { isHexColor } from "@/lib/utils";
import { InputFieldProps } from "@/types/type";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";

const Field = ({
    label,
    icon,
    color = "general",
    variant = "standard",
    helperText,
    rounded = false,
    ...props
}: InputFieldProps) => {
    let _color = "";

    if (color === "success") _color = "#38A169";
    if (color === "danger") _color = "#F56565";
    if (color === "warning") _color = "#EAB308";

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="w-full flex flex-col gap-y-1">
                    {label && (
                        <Text className="text-lg font-JakartaLight text-general-200">
                            {label}
                        </Text>
                    )}
                    <TextInput
                        style={{
                            borderColor:
                                color !== "general"
                                    ? isHexColor(color)
                                        ? color
                                        : _color
                                    : "#EBEBEB",
                            backgroundColor:
                                variant === "filled"
                                    ? "#F6F8FA"
                                    : "transparent",
                            borderWidth: variant !== "standard" ? 1 : 0,
                            borderBottomWidth: variant ? 1 : 0,
                            borderStyle: "solid",
                            borderRadius:
                                variant !== "standard" ? (rounded ? 50 : 8) : 0,
                        }}
                        className="h-[42px] px-3 from-neutral-700 text-xl font-JakartaLight"
                        {...props}
                    />
                    {helperText && (
                        <Text className="text-sm font-JakartaLight text-right">
                            {helperText}
                        </Text>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default Field;
