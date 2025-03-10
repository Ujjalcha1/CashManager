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
import Chip from "./Chip";
import moment from "moment";

const FilterOptions = () => {
  const [selected, setSelected] = useState<number>(0);
  const [label, setLabel] = useState<string>(
    options.find(item => item.value === selected)?.label || "",
  );

  const handleSelected = (value: number) => {
    if (value === 1) {
      setSelected(value);
      setLabel("Today");
    } else {
      setLabel(options.find(item => item.value === value)?.label || "");
      setSelected(value);
    }
  };

  const onNext = () => {
    if (selected === 1) {
      setLabel(
        moment(label, "MMMM Do YYYY").add(1, "days").format("MMMM Do YYYY"),
      );
    } else if (selected === 2) {
      setLabel(
        moment(label, "MMMM Do YYYY").add(1, "weeks").format("MMMM Do YYYY"),
      );
    } else if (selected === 3) {
      setLabel(moment(label, "MMMM YYYY").add(1, "months").format("MMMM YYYY"));
    } else if (selected === 4) {
      setLabel(moment(label, "YYYY").add(1, "years").format("YYYY"));
    }
  };

  const onPrevious = () => {
    console.log("object", selected);
    if (selected === 1) {
      setLabel(
        moment(label, "MMMM Do YYYY")
          .subtract(1, "days")
          .format("MMMM Do YYYY"),
      );
    } else if (selected === 2) {
      const firstDayOfWeek = moment(label, "MMMM YYYY")
        .startOf("week")
        .format("YYYY-MM-DD");
      const lastDayOfWeek = moment(label, "MMMM YYYY")
        .endOf("week")
        .format("YYYY-MM-DD");
      setLabel(`${firstDayOfWeek} - ${lastDayOfWeek}`);
    } else if (selected === 3) {
      setLabel(
        moment(label, "MMMM YYYY").subtract(1, "months").format("MMMM YYYY"),
      );
    } else if (selected === 4) {
      setLabel(moment(label, "YYYY").subtract(1, "years").format("YYYY"));
    }
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
        <Text style={styles.title}>{label}</Text>
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
