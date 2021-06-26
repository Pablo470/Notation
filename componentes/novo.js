import React from "react";
import { View, StyleSheet } from "react-native";

const ViewStyleProps = () => {
    return (
      <View style={styles.container}>
        <View style={styles.middle} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
 middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  }
});

export default ViewStyleProps;