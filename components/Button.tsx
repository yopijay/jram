import { isHexColor } from "@/lib/utils";
import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity } from "react-native";

const Button = ({
    onPress,
    label,
    variant = "text",
    color,
    size = "small",
    uppercase = false,
    rounded= false,
    ...props
}: ButtonProps) => {
    let _color = "";
    let _size = 0;
    let _text = "";

    if (color === "success") _color = "#38A169";
    if (color === "danger") _color = "#F56565";
    if (color === "warning") _color = "#EAB308";

    if (size === "small") {
        _size = 12;
        _text = "text-md";
    }

    if (size === "medium") {
        _size = 14;
        _text = "text-lg";
    }

    if (size === "large") {
        _size = 16;
        _text = "text-xl";
    }

    return (
        <TouchableOpacity
            style={{
                padding: _size,
                backgroundColor:
                    variant === "contained"
                        ? color && isHexColor(color)
                            ? color
                            : _color
                        : "transparent",
                borderRadius: variant !== "text" ? (rounded ? 50 : 8) : 0,
            }}
            className="bg-red-500"
            onPress={onPress}
            {...props}
        >
            <Text
                className={`${_text} text-center ${color === "warning" ? "text-black" : "text-white"} font-JakartaBold ${uppercase ? "uppercase" : ""}`}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
