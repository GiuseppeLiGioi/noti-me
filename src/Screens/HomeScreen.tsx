import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ListaSchermiTab } from "../types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";


type HomeScreenProps = {
    navigation: BottomTabNavigationProp <ListaSchermiTab, 'Home'>
}

export default function HomeScreen({navigation}: HomeScreenProps ) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: "10",
            padding: 20,
            maxWidth: "100%",
            backgroundColor: "#0b0f2a"


        },

        title: {
            fontSize: 24,
            color: "white",
            textAlign: "center",
            fontFamily: "Poppins_600SemiBold"
        },
        semiTitle: {
            fontSize: 18,
            color: "white",
            textAlign: "center",
            fontFamily: "Poppins_400Regular"
        },
        buttonHome: {
            borderColor: "transparent",
            borderWidth: 3,
            padding: 12,
            backgroundColor: "#140b22ff",
            borderRadius: 18,
            textAlign: "center",
            maxWidth: "70%",
                
        },

        buttonTextTopHome: {
            color: "white",
            fontFamily: "Poppins_400Regular"
        },

        containerEmojiHome: {
            flexDirection: "row",
            gap: 30
        },

        containerBottomHome: {
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            padding: 40,
            borderRadius: 20,
            backgroundColor: '#140b22ff',
            textAlign: "center",
            borderWidth: 3,
            borderColor: "transparent",
            shadowColor: '#ff00ff',
        },

        emojiText: {
            textAlign: "center",
            fontSize: 24,
            color: "white",
            fontFamily: "Poppins_400Regular"
        }
    })


    const [isFontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold
    })
    
    const [emoji, setEmoji] = useState<'happy' | 'neutral' | 'sad' | null>(null)

    if (!isFontsLoaded) return null;

    return (

         <View style={styles.container}>

            <Text style={styles.title}>Benvenuto su NotiMe!</Text>
            <Text style={styles.semiTitle}>Il mio primo piccolo progetto in React Native + TypeScript.</Text>
            <LinearGradient
             colors={['#ff00ff', '#00ffff']}
             start={{x: 0, y: 0}}
             end={{x: 1, y: 1}}
             style={{borderRadius: 18, padding: 2, marginTop: 30}}
            >

            <TouchableOpacity style={styles.buttonHome} onPress={() => navigation.navigate("Notes")}><Text style={styles.buttonTextTopHome}>Vai alle note!</Text></TouchableOpacity>
            </LinearGradient>

            <LinearGradient
                colors={['#ff00ff', '#00ffff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ borderRadius: 20, padding: 2,  marginTop: 30 }}
            >
                <View style={styles.containerBottomHome}>
                    <Text style={styles.emojiText}>Come ti senti oggi!?</Text>

                    <View style={styles.containerEmojiHome}>

                        <TouchableOpacity onPress={() => setEmoji('happy')}>

                            <FontAwesome5 name="smile" size={70} color={emoji === "happy" ? "green" : "gray"} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setEmoji('neutral')}>

                            <FontAwesome5 name="meh" size={70} color={emoji === "neutral" ? "yellow" : "gray"} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setEmoji('sad')}>

                            <FontAwesome5 name="frown" size={70} color={emoji === "sad" ? "red" : "gray"} />
                        </TouchableOpacity>


                    </View>

                </View>
            </LinearGradient>
         </View>




       

    )


}