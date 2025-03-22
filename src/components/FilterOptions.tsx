import moment from "moment";
import React, {useState} from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Colors, OpenSansBold, FilterOptions as options} from "../constant";
import {changeLabel, onNextOnPrevious} from "../utlis";
import Chip from "./Chip";

const FilterOptions = () => {
  const today = moment().format("MMMM Do YYYY");
  const [selected, setSelected] = useState<number>(0);
  const [label, setLabel] = useState<string>("All");

  const handleSelected = (value: number) => {
    setLabel(changeLabel(value));
    setSelected(value);
  };

  const onNext = () => {
    setLabel(onNextOnPrevious(selected, label, "next") || "All");
  };

  const onPrevious = () => {
    setLabel(onNextOnPrevious(selected, label, "previous") || "All");
  };

  return (
    <View style={styles.main}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.container}>
        {options.map((option, index) => (
          <Chip
            key={index}
            label={option.label}
            value={option.value}
            selected={selected}
            onSelected={(value: number) => handleSelected(value)}
          />
        ))}
      </ScrollView>
      <View style={styles.box}>
        {selected !== 0 ? (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.circle}
            onPress={onPrevious}>
            <Ionicons name="chevron-back" size={20} color={Colors.white} />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}
        <Text style={styles.title}>{today === label ? "Today" : label}</Text>
        {selected !== 0 ? (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.circle}
            onPress={onNext}>
            <Ionicons name="chevron-forward" size={20} color={Colors.white} />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
    </View>
  );
};

export default FilterOptions;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  main: {
    backgroundColor: Colors.white,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 8,
  },
  title: {
    ...OpenSansBold,
    fontSize: 15,
    color: Colors.white,
    textAlign: "center",
  },
  circle: {
    borderRadius: 50,
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    width: 25,
  },
});
