import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
    const [selectedDate, setSelectedDate] = useState<string | null>() /*Data selezionata dall'utente */
    const [markedDates, setMarkedDates] = useState<MarkedDatesType>() /*Date che possiedono un emoji / mood e quindi marcate */

    type MarkedDatesType = { [date: string]: { emoji?: string, selected?: boolean, selectedColor?: string } }

    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        const newMarks: MarkedDatesType = {}

        for (const chiaveDate in moods) {  /*Ripasso ciclo for...in per iterare sulle chiavi degli oggetti */
            const mood = moods[chiaveDate]
            let emoji = ""

            if (mood === "happy") {
                emoji = "😊"
            }
            else if (mood === "neutral") {
                emoji = "😐"
            }
            else if (mood === "sad") {
                emoji = "😢"
            }

            newMarks[chiaveDate] = { emoji, selected: chiaveDate === selectedDate }; /*Popoliamo l'oggetto */
        }

        if (selectedDate && !newMarks[selectedDate]) {
            newMarks[selectedDate] = { selected: true }; /*Anche se non hanno emoji posso reintrare nelle marcate selezionandole*/
        }

        setMarkedDates(newMarks) /*Aggiorniamo lo stato */

    }, [moods, selectedDate])



    return (
        <View style={stylesScreen.containerAllNotes}>

            <View style={stylesScreen.containerCalendar}>

                <Calendar /*Calendar da  react-native-calendars*/
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

                    dayComponent={(dayProperties) => { /*dayComponent possiete dayProperties.date e dayProperties.state*/
                        if (!dayProperties.date) return null;


                        const markForThisDay = markedDates?.[dayProperties.date.dateString];
                        const isToday = dayProperties.date.dateString === today; /*per capire se la data selezionata è quella di oggi, per modificare lo stile */

                        return (
                            <TouchableOpacity style={{
                                width: 40,
                                height: 40,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "transparent",
                                borderRadius: 20,
                            }}
                            onPress={() => {
                                setSelectedDate(dayProperties.date?.dateString)
                                setText(notes[dayProperties.date?.dateString || ""])
                            }}
                            >
                                <Text style={{ color: dayProperties.state === "disabled" ? "#555" : isToday ? "#00ffff" : markForThisDay?.selected ? "#ff80dfff" : "white", fontSize: 14 }}>
                                    {dayProperties.date.day}
                                </Text>
                                <Text style={{ fontSize: 20 }}>
                                    {markForThisDay?.emoji || "❓"}
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                    }


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