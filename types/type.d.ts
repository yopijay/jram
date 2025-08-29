import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
    label: string;
    variant?: "text" | "contained" | "outlined";
    color?: "success" | "warning" | "danger" | string;
    size?: "small" | "medium" | "large";
    uppercase?: boolean;
    rounded?: boolean;
}

declare interface InputFieldProps extends TextInputProps {
    label?: string;
    icon?: {
        src: any;
        position: "left" | "right";
    };
    color?: "success" | "warning" | "danger" | string;
    variant?: "outlined" | "filled" | "standard";
    helperText?: string;
    rounded?: boolean;
}

declare interface DropdownProps {
    label?: string;
    options: {
        label: string;
        value: string;
    }[];
    value: string | null;
    onSelect: (value: string) => void;
    placeholder?: string;
    rounded?: boolean;
    color?: "success" | "danger" | "warning" | string;
    variant?: string;
}
