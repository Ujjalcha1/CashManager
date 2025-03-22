import {StyleSheet, Text, TouchableOpacity, ViewStyle} from "react-native";
import React from "react";
import {Colors, OpenSansBold, OpenSansRegular} from "../constant";

type ChipProps = {
  label: string;
  value: number;
  selected: number;
  onSelected: (value: number) => void;
  activeChipStyle?: ViewStyle;
  inActiveChipStyle?: ViewStyle;
};

const Chip = ({
  label,
  value,
  selected,
  onSelected,
  activeChipStyle,
  inActiveChipStyle,
}: ChipProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={
        selected === value ? [styles.activeChip, activeChipStyle] : styles.chip
      }
      onPress={() => onSelected(value)}>
      <Text
        style={
          selected === value
            ? [styles.activelabel, inActiveChipStyle]
            : styles.label
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  activeChip: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    minWidth: 50,
  },
  chip: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    minWidth: 50,
  },
  activelabel: {
    ...OpenSansBold,
    fontSize: 12,
    color: Colors.white,
  },
  label: {
    ...OpenSansRegular,
    fontSize: 12,
    color: Colors.primary,
  },
});
