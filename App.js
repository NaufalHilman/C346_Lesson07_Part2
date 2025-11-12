import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "powderblue" }]}>
                <Text>Child One</Text>
            </View>
            <View style={[styles.child, { backgroundColor: "skyblue" }]}>
                <Text>Child Two</Text>
            </View>
            <View style={[styles.child, { backgroundColor: "steelblue" }]}>
                <Text>Child Three</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        borderColor: "#0099AA",
        borderWidth: 5,

        // justifyContent: 'flex-start',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        // justifyContent: 'space-around',
        // justifyContent: 'center',
    },
    child: {
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        height: 80,
    },
});
