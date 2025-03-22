import {Formik, FormikProps} from "formik";
import moment from "moment";
import React, {useRef, useState} from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Chip from "../../components/Chip";
import Container from "../../components/Container";
import {Colors, RobotoMedium} from "../../constant";
import {CashScreenType} from "../../navigation/navigationTypes";
import KeyboardModal from "../../components/KeyboardModal";

const CashScreen = (props: CashScreenType) => {
  const {title, type} = props.route.params;

  const today = moment().format();
  const currentTime = moment().format();
  const [isDateVisible, setIsDateVisible] = useState<boolean>(false);
  const [isTimeVisible, setIsTimeVisible] = useState<boolean>(false);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const formikRef = useRef<FormikProps<{
    type: number;
    amount: string;
    date: string;
    time: string;
  }> | null>(null);

  const handleDateConfirm = (date: any) => {
    if (formikRef.current) {
      formikRef.current.setFieldValue("date", moment(date).format());
    }
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setIsDateVisible(false);
  };

  const handleTimeConfirm = (time: any) => {
    if (formikRef.current) {
      formikRef.current.setFieldValue("time", moment(time).format());
    }
    hideTimePicker();
  };
  const hideTimePicker = () => {
    setIsTimeVisible(false);
  };

  const onChnageKeyboard = () => {
    Keyboard.dismiss();
    setIsOpenKeyboard(true);
  };

  const onCloseKeyboard = () => {
    setIsOpenKeyboard(false);
  };

  const onSetKeyboardValue = (value: any) => {
    formikRef.current?.setFieldValue("amount", value);
    setIsOpenKeyboard(false);
  };

  return (
    <Container style={styles.container} headerTitle={title}>
      <Card style={styles.card}>
        <Formik
          innerRef={formikRef}
          initialValues={{type, amount: "", date: today, time: currentTime}}
          onSubmit={values => console.log(values)}>
          {({handleSubmit, values, handleChange, setFieldValue}) => (
            <>
              <View style={styles.chipWrapper}>
                <Chip
                  label="Cash In"
                  value={0}
                  selected={values.type}
                  activeChipStyle={styles.activeChip}
                  onSelected={(val: any) => setFieldValue("type", val)}
                />
                <Chip
                  label="Cash Out"
                  value={1}
                  selected={values.type}
                  onSelected={(val: any) => setFieldValue("type", val)}
                />
              </View>

              <View style={styles.inputWrapper}>
                <View style={styles.labelWrapper}>
                  <Text style={[styles.labelText, {fontSize: 25}]}>
                    {values.type === 0 ? "Cash In" : "Cash Out"}
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.textInput, {fontSize: 25}]}
                    value={values.amount}
                    onChangeText={handleChange("amount")}
                    autoFocus={true}
                    keyboardType="decimal-pad"
                  />
                  <TouchableOpacity
                    style={styles.iconWrapper}
                    onPress={onChnageKeyboard}>
                    <MaterialCommunityIcons
                      name="calculator-variant"
                      color={Colors.primary}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <TextInput style={styles.textInput} placeholder="Note" />
              </View>

              <View style={styles.dateWraper}>
                <View style={styles.calendar}>
                  <Text>{moment(values.date).format("DD-MMM-YYYY")}</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setIsDateVisible(true)}>
                    <MaterialCommunityIcons
                      name="calendar-month"
                      color={Colors.primary}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.calendar}>
                  <Text>{moment(values.time).format("hh:mm A")}</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setIsTimeVisible(true)}>
                    <MaterialCommunityIcons
                      name="clock-outline"
                      color={Colors.primary}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.buttonWrapper}>
                <Button
                  style={[styles.button, {backgroundColor: Colors.primary}]}
                  textStyle={[styles.buttonText, {color: Colors.white}]}
                  title="Save and Exit"
                  onPress={handleSubmit}
                />
                <Button
                  style={[styles.button, {backgroundColor: Colors.secondary}]}
                  textStyle={[styles.buttonText, {color: Colors.primary}]}
                  title="Save and Continue"
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </Card>

      <DateTimePickerModal
        isVisible={isDateVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimeVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      {isOpenKeyboard && (
        <KeyboardModal onBack={onCloseKeyboard} onSubmit={onSetKeyboardValue} />
      )}
    </Container>
  );
};

export default CashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightWhite,
  },
  card: {
    width: "95%",
    alignSelf: "center",
    marginVertical: 20,
    padding: 7,
  },
  chipWrapper: {
    flexDirection: "row",
  },
  activeChip: {
    borderColor: Colors.success,
    backgroundColor: Colors.success,
  },
  inputWrapper: {
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginVertical: 5,
  },
  labelWrapper: {
    width: "40%",
  },
  labelText: {
    ...RobotoMedium,
    fontSize: 16,
    color: Colors.black,
  },
  inputContainer: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  dateWraper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendar: {
    borderColor: Colors.gray,
    borderWidth: 1,
    width: "48%",
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
  },
  buttonText: {
    fontSize: 15,
  },
});
