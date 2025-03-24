import moment from "moment";
import {PermissionsAndroid} from "react-native";

const today = moment().format("MMMM Do YYYY");
const firstDayOfWeek = moment().startOf("week").format("YYYY-MM-DD");
const lastDayOfWeek = moment().endOf("week").format("YYYY-MM-DD");
const firstDayOfMonth = moment().startOf("month").format("YYYY-MM-DD");
const lastDayOfMonth = moment().endOf("month").format("YYYY-MM-DD");
const firstDayOfYear = moment().startOf("year").format("YYYY-MM-DD");
const lastDayOfYear = moment().endOf("year").format("YYYY-MM-DD");

export const changeLabel = (value: number) => {
  if (value === 0) {
    return "All";
  } else if (value === 1) {
    return today;
  } else if (value === 2) {
    return `${firstDayOfWeek} - ${lastDayOfWeek}`;
  } else if (value === 3) {
    return `${firstDayOfMonth} - ${lastDayOfMonth}`;
  } else {
    return `${firstDayOfYear} - ${lastDayOfYear}`;
  }
};

export const onNextOnPrevious = (
  value: number,
  label: string,
  type: "next" | "previous",
) => {
  if (type === "next") {
    if (value === 1) {
      return moment(label, "MMMM Do YYYY")
        .add(1, "days")
        .format("MMMM Do YYYY");
    } else if (value === 2) {
      return (
        moment(label, "YYYY-MM-DD")
          .add(1, "weeks")
          .startOf("week")
          .format("YYYY-MM-DD") +
        " - " +
        moment(label, "YYYY-MM-DD")
          .add(1, "weeks")
          .endOf("week")
          .format("YYYY-MM-DD")
      );
    } else if (value === 3) {
      return (
        moment(label, "YYYY-MM-DD")
          .add(1, "months")
          .startOf("month")
          .format("YYYY-MM-DD") +
        " - " +
        moment(label, "YYYY-MM-DD")
          .add(1, "months")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
    } else {
      return (
        moment(label, "YYYY-MM-DD")
          .add(1, "years")
          .startOf("year")
          .format("YYYY-MM-DD") +
        " - " +
        moment(label, "YYYY-MM-DD")
          .add(1, "years")
          .endOf("year")
          .format("YYYY-MM-DD")
      );
    }
  } else if (type === "previous") {
    if (value === 1) {
      return moment(label, "MMMM Do YYYY")
        .subtract(1, "days")
        .format("MMMM Do YYYY");
    } else if (value === 2) {
      return (
        moment(label, "YYYY-MM-DD")
          .subtract(1, "weeks")
          .startOf("week")
          .format("YYYY-MM-DD") +
        " - " +
        moment(label, "YYYY-MM-DD")
          .subtract(1, "weeks")
          .endOf("week")
          .format("YYYY-MM-DD")
      );
    } else if (value === 3) {
      return (
        moment(label, "YYYY-MM-DD")
          .subtract(1, "months")
          .startOf("month")
          .format("YYYY-MM-DD") +
        " - " +
        moment(label, "YYYY-MM-DD")
          .subtract(1, "months")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
    } else if (value === 4) {
      return (
        moment(label, "YYYY-MM-DD")
          .subtract(1, "years")
          .startOf("year")
          .format("YYYY-MM-DD") +
        " - " +
        moment(label, "YYYY-MM-DD")
          .subtract(1, "years")
          .endOf("year")
          .format("YYYY-MM-DD")
      );
    }
  }
};

export const contactPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: "Contacts Permission",
        message: "This app needs access to your contacts.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return granted;
    } else {
      console.log("Contacts permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
