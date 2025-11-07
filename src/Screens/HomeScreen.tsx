import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function HomeScreen() {


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: "10",
            padding: 20,
            maxWidth: "100%",
            
            
        },

        title: {
            fontSize: 20,
            color: "white",
            textAlign: "center"
        },
        semiTitle: {
            fontSize: 14,
            color: "white",
            textAlign: "center"
        },
        button: {
            borderColor: "green",
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            textAlign: "center",
            marginTop: 20,
            maxWidth: "70%"
        }
    })


    return (

        <LinearGradient
            colors={['#0D0D0D','#0A0A23', '#10104B', '#1A1A73']}
            start={[0, 0]}
            end={[0, 1]}
            style={styles.container}>

            <Text style={styles.title}>Benvenuto su NotiMe!</Text>
            <Text style={styles.semiTitle}>Il mio primo piccolo progetto in React Native + TypeScript.</Text>
            <TouchableOpacity style={styles.button}><Text>Vai alle note!</Text></TouchableOpacity>
        </LinearGradient>

    )


}