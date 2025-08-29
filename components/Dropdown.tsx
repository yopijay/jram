import { isHexColor } from "@/lib/utils";
import { DropdownProps } from "@/types/type";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const Dropdown = ({
    options,
    value,
    rounded = false,
    onSelect,
    color = "general",
    variant = "standard",
    placeholder,
    label,
}: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const selected = options.find((opt) => opt.value === value);
    let _color = "";

    if (color === "success") _color = "#38A169";
    if (color === "danger") _color = "#F56565";
    if (color === "warning") _color = "#EAB308";

    return (
        <View className="w-full relative gap-y-1">
            {label && (
                <Text className="text-lg font-JakartaLight text-general-200">
                    {label}
                </Text>
            )}
            <TouchableOpacity
                style={{
                    borderColor:
                        color !== "general"
                            ? isHexColor(color)
                                ? color
                                : _color
                            : "#EBEBEB",
                    backgroundColor:
                        variant === "filled" ? "#F6F8FA" : "transparent",
                    borderWidth: variant !== "standard" ? 1 : 0,
                    borderBottomWidth: variant ? 1 : 0,
                    borderStyle: "solid",
                    borderRadius:
                        variant !== "standard" ? (rounded ? 50 : 8) : 0,
                }}
                className="h-[42px] px-3 flex justify-center"
                onPress={() => setOpen((prev) => !prev)}
                activeOpacity={0.8}
            >
                <Text className="text-xl font-JakartaLight from-neutral-700">
                    {selected ? selected.label : placeholder || "Select..."}
                </Text>
            </TouchableOpacity>
            {open && (
                <View className="absolute left-0 w-full bg-white border-[1px] border-general-700 rounded-lg shadow-lg z-10 mt-20">
                    <FlatList
                        className="py-2"
                        data={options}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                className="px-3 py-2 hover:bg-general-700 rounded-lg"
                                onPress={() => {
                                    onSelect(item.value);
                                    setOpen(false);
                                }}
                            >
                                <Text className="text-xl font-JakartaLight text-general-200">
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default Dropdown;
