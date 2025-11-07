import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";


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
        },

        buttonTextTopHome:{
            color: "blue"
        },

        containerEmojiHome:{
            flexDirection: "row",
            gap: 40,

        },

        containerBottomHome: {
            justifyContent: "center",
            alignContent: "center",
            gap: 20,
            padding: 40,
            borderRadius: 15,
            backgroundColor: "black",
            textAlign: "center",
            borderWidth: 1,
            marginTop: 30,

            borderColor: "rgba(239, 251, 213, 1)"
        },

        emojiText : {
            textAlign: "center",
            fontSize: 24,
            color: "white"
        }



    })
    
    const [emoji, setEmoji] = useState <'happy' | 'neutral' | 'sad' | null> (null)

    return (

        <LinearGradient
            colors={['#0D0D0D','#0A0A23', '#10104B', '#1A1A73']}
            start={[0, 0]}
            end={[0, 1]}
            style={styles.container}>

            <Text style={styles.title}>Benvenuto su NotiMe!</Text>
            <Text style={styles.semiTitle}>Il mio primo piccolo progetto in React Native + TypeScript.</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonTextTopHome}>Vai alle note!</Text></TouchableOpacity>

            <View style={styles.containerBottomHome}>
                <Text style={styles.emojiText}>Come ti senti oggi!?</Text>

                <View style={styles.containerEmojiHome}>
                    <TouchableOpacity  onPress={() => setEmoji('happy')}>

                    <FontAwesome5 name = "smile" size={70} color={emoji === "happy" ? "green" : "gray"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setEmoji('neutral')}>

                    <FontAwesome5 name = "meh" size={70} color={emoji === "neutral" ? "yellow" : "gray"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setEmoji('sad')}>

                    <FontAwesome5 name = "frown" size={70} color={emoji === "sad" ? "red" : "gray"}/>
                    </TouchableOpacity>


                </View>
            </View>
        </LinearGradient>

    )


}