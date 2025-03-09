import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Container from "../../components/Container";
import FilterOptions from "../../components/FilterOptions";
import {
  Colors,
  OpenSansBold,
  OpenSansRegular,
  OpenSansSemiBold,
} from "../../constant";

const HomeScreen = () => {
  return (
    <Container style={{backgroundColor: Colors.lightWhite}}>
      <FilterOptions />

      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.header}>Date</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.header}>Cash In</Text>
        </View>
        <View style={styles.middle}>
          <Text style={[styles.header, {color: Colors.error}]}>Cash Out</Text>
        </View>
      </View>

      <View style={styles.dataRow}>
        <View style={styles.left}>
          <Text style={styles.value}>Sun, 09 Mar 2025 11:12 PM</Text>
        </View>
        <View style={styles.middle}>
          <Text style={[OpenSansSemiBold, styles.fontSize13]}>60</Text>
        </View>
        <View style={styles.middle}>
          <Text style={[OpenSansSemiBold, styles.fontSize13]}>20</Text>
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    ...OpenSansBold,
    fontSize: 13,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: Colors.lightWhite,
    alignItems: "center",
  },
  dataRow: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: Colors.white,
    alignItems: "center",
    marginBottom: 5,
  },
  value: {
    ...OpenSansRegular,
    fontSize: 12,
  },
  left: {width: "60%", alignItems: "flex-start"},
  middle: {width: "20%", alignItems: "center"},
  fontSize13: {fontSize: 13},
});
