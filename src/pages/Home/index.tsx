import React, {useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import Container from "../../components/Container";
import FilterOptions from "../../components/FilterOptions";
import {
  Colors,
  OpenSansBold,
  OpenSansRegular,
  OpenSansSemiBold,
  size,
} from "../../constant";
import Button from "../../components/Button";

const HomeScreen = () => {
  const [data, setData] = useState([
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
    {
      date: "Sun, 09 Mar 2025 11:12 PM",
      cashIn: 60,
      cashOut: 20,
    },
  ]);

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

      <FlatList
        data={data}
        renderItem={() => {
          return (
            <View style={styles.dataRow}>
              <View style={styles.left}>
                <Text style={styles.value}>Sun, 09 Mar 2025 11:12 PM</Text>
              </View>
              <View style={styles.middle}>
                <Text style={[OpenSansSemiBold, styles.fontSize13]}>60</Text>
              </View>
              <View style={styles.middle}>
                <Text
                  style={[
                    OpenSansSemiBold,
                    styles.fontSize13,
                    {color: Colors.error},
                  ]}>
                  20
                </Text>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.flexGrow} />
      <View style={styles.buttonContainer}>
        <Button
          title="Cash in"
          onPress={() => {}}
          style={[styles.button, {backgroundColor: Colors.success}]}
          textStyle={styles.buttonText}
        />
        <Button
          title="Cash out"
          onPress={() => {}}
          style={[styles.button, {backgroundColor: Colors.error}]}
          textStyle={styles.buttonText}
        />
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>Total Cash In</Text>
          <Text style={styles.summaryValue}>
            {data.reduce((acc, item) => acc + item.cashIn, 0)}
          </Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>Total Cash Out</Text>
          <Text style={[styles.summaryValue, {color: Colors.error}]}>
            {data.reduce((acc, item) => acc + item.cashOut, 0)}
          </Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>Balance</Text>
          <Text style={styles.summaryValue}>
            {data.reduce((acc, item) => acc + item.cashIn - item.cashOut, 0)}
          </Text>
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
  buttonContainer: {
    padding: 10,
    width: size.window_width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  flexGrow: {
    flexGrow: 1,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
  },
  button: {
    width: size.window_width / 2.5,
    marginVertical: 0,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.white,
  },
  summaryBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: size.window_width / 3,
  },
  summaryText: {
    ...OpenSansRegular,
    fontSize: 14,
  },
  summaryValue: {
    ...OpenSansBold,
    fontSize: 14,
  },
});
