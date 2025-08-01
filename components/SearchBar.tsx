import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface ISearchBar {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({placeholder, onPress} : ISearchBar) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 color-white"
      />
    </View>
  );
};

export default SearchBar;
