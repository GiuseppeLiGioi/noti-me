import { View, Text, StyleSheet } from "react-native";
import { useMood } from "../Contexts/MoodContext";
import { Calendar } from "react-native-calendars";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function NotesScreen() {

    const stylesScreen = StyleSheet.create({

        containerAllNotes: {
            width: "100%",
            height: "100%",
            backgroundColor: "#0b0f2a"
        },

        containerCalendar: {
            maxWidth: "100%",
            marginTop: 30,
            padding: 10,
        },

        calendar: {
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 20,
            padding: 10

        },

        textCalendar: {
            color: "white",
            marginTop: 20,
            fontFamily: "Poppins_400Regular",
            textAlign: "center",
            fontSize: 16
        },

        gradientLine: {
            width: "70%",
            height: 4,
            textAlign: "center",
            borderRadius: 2,
        }


    })

    const { moods, notes, setNoteForDate, setMoodForDate } = useMood()
    const [text, setText] = useState<string>("")
    const [selectedDate, setSelectedDate] = useState<string | null>()
    const [markedDates, setMarkedDates] = useState<MarkedDatesType>()

    type MarkedDatesType = { [date: string]: { marked?: boolean, dotColor?: string, selected?: boolean, selectedColor?: string } }

    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        const newMarks: MarkedDatesType = {}

        for (const chiaveDate in moods) {
            const mood = moods[chiaveDate]
            let dotColor = "gray"

            if (mood === "happy") {
                dotColor = "green"
            }
            else if (mood === "neutral") {
                dotColor = "yellow"
            }
            else if (mood === "sad") {
                dotColor = "red"
            }

            newMarks[chiaveDate] = { marked: true, dotColor, selected: false, selectedColor: "transparent" }
        }

        setMarkedDates(newMarks)

    }, [moods])



    return (
        <View style={stylesScreen.containerAllNotes}>

            <View style={stylesScreen.containerCalendar}>

                <Calendar
                    style={stylesScreen.calendar}
                    markedDates={markedDates}
                    onDayPress={(day) => {
                        setSelectedDate(day.dateString)
                        setText(notes[day.dateString] || "")
                    }}
                    theme={{
                        backgroundColor: '#0b0f2a',       
                        calendarBackground: '#0b0f2a',   
                        textSectionTitleColor: 'white',   
                        dayTextColor: 'white',            
                        todayTextColor: '#00ffff',       
                        selectedDayBackgroundColor: '#ff00ff', 
                        monthTextColor: 'white',          
                        arrowColor: 'white',              
                        dotColor: '#ff00ff',              
                        selectedDotColor: 'white',
                        textDisabledColor: '#555',        
                    }}

                />

                <View style={{ alignItems: "center" }}>
                    <Text style={stylesScreen.textCalendar}>Data Selezionata : {selectedDate}</Text>
                    <LinearGradient colors={['#ff00ff', '#00ffff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={stylesScreen.gradientLine}>

                    </LinearGradient>

                </View>

            </View>



        </View>
    )
}