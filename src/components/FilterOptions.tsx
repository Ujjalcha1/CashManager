import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Colors, OpenSansBold, FilterOptions as options} from "../constant";
import Chip from "./Chip";

const FilterOptions = () => {
  const [selected, setSelected] = useState<number>(0);
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
            onSelected={(value: number) => setSelected(value)}
          />
        ))}
      </ScrollView>
      <View style={styles.box}>
        <Text style={styles.title}>
          {options.find(item => item.value === selected)?.label}
        </Text>
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
    backgroundColor: Colors.primary,
    padding: 8,
  },
  title: {
    ...OpenSansBold,
    fontSize: 15,
    color: Colors.white,
    textAlign: "center",
  },
});
