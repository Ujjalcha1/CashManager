import React, {useCallback, useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import Modal from "react-native-modal";
import {
  Colors,
  KeyboardNumbers,
  RobotoBold,
  RobotoMedium,
  size,
} from "../constant";
import Ionicons from "react-native-vector-icons/Ionicons";
import {evaluate} from "mathjs";
import Button from "./Button";

type keyboardType = {
  onBack: () => void;
  onSubmit: (e: any) => void;
};

const KeyboardModal = ({onBack, onSubmit}: keyboardType) => {
  const [total, setTotal] = useState("");
  const [pressedItem, setPressedItem] = useState("");

  const onCalculate = useCallback((item: {value: string; label?: string}) => {
    if (item.value === "c") {
      setPressedItem("");
      setTotal("0");
    } else if (["/", "*", "-", "+"].includes(item.value)) {
      setPressedItem(prev => (prev ? `${prev} ${item.value} ` : ""));
    } else if (item.value === "x") {
      setPressedItem(prev => prev.slice(0, -1).trim());
    } else if (item.label) {
      setPressedItem(prev => prev + item.label);
    }
  }, []);

  const calculateTotal = useCallback(() => {
    try {
      const sanitizedExpression = pressedItem.replace(/x/g, "*").trim();
      if (sanitizedExpression) {
        const result = evaluate(sanitizedExpression);
        if (isFinite(result)) {
          setTotal(result.toString());
        } else {
          setTotal(total);
        }
      } else {
        setTotal("0");
      }
    } catch {
      setTotal(total);
    }
  }, [pressedItem, total]);

  useEffect(() => {
    calculateTotal();
  }, [pressedItem, calculateTotal]);

  return (
    <Modal
      isVisible={true}
      animationIn={"slideInUp"}
      animationOut={"slideInDown"}
      style={styles.modal}
      onBackButtonPress={onBack}
      onBackdropPress={onBack}>
      <View style={styles.keyboardPosition}>
        <View style={styles.box}>
          <View style={{marginVertical: 10}}>
            <Text style={styles.totalNumber}>{total}</Text>
            <Text style={styles.calculate}>{pressedItem}</Text>
          </View>
          <View style={{flexDirection: "row", flexWrap: "wrap"}}>
            {KeyboardNumbers.map((item: any, index: any) => {
              const isGrayBackground = ["/", "*", "-", "+", "c"].includes(
                item.value,
              );
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={index}
                  onPress={() => {
                    Vibration.vibrate(50);
                    onCalculate(item);
                  }}
                  style={[
                    styles.numberBox,
                    {
                      width: size.screen_width / 4.2,
                      backgroundColor:
                        isGrayBackground || item.icon
                          ? Colors.light
                          : Colors.white,
                    },
                  ]}>
                  {item.icon ? (
                    <Ionicons name={item.icon} size={30} />
                  ) : (
                    <Text style={[styles.label]}>{item.label}</Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
          <Button
            title="Ok"
            onPress={() => onSubmit(total)}
            style={{
              width: "100%",
              borderRadius: 0,
              marginVertical: 5,
              backgroundColor: Colors.primary,
            }}
            textStyle={{color: Colors.white}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default KeyboardModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  keyboardPosition: {
    position: "absolute",
    bottom: 0,
  },
  box: {
    backgroundColor: Colors.white,
    width: size.screen_width,
  },
  numberBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    elevation: 2,
    margin: 2,
    backgroundColor: Colors.white,
    borderRadius: 2,
  },
  label: {
    ...RobotoMedium,
    fontSize: 15,
  },
  totalNumber: {
    ...RobotoBold,
    fontSize: 30,
    paddingBottom: 10,
  },
  calculate: {
    ...RobotoMedium,
    fontSize: 15,
  },
});
