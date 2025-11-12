import { View, Text, StyleSheet } from "react-native";
import { useMood } from "../Contexts/MoodContext";
import { Calendar } from "react-native-calendars";
import { useState, useEffect } from "react";

export default function NotesScreen(){

    const stylesScreen = StyleSheet.create({

    containerAllNotes: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0b0f2a"
    },

    containerCalendar: {
     maxWidth: "100%",
     marginTop: 30,
     padding: 10
    
    },
    calendar: {
    borderRadius: 20,
    
    },

    textCalendar: {
        color: "white"
    }


    })

    const {moods, notes, setNoteForDate, setMoodForDate} = useMood()
    const [text, setText] = useState<string>("")
    const [selectedDate, setSelectedDate] = useState<string | null>()
    const [markedDates, setMarkedDates] = useState<MarkedDatesType>()

    type MarkedDatesType = {[date : string] : {marked?: boolean, dotColor?: string, selected?: boolean, selectedColor?: string}}

    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
    const newMarks: MarkedDatesType = {}

    for(const chiaveDate in moods){
    const mood = moods[chiaveDate]
    let dotColor = "gray"

    if(mood === "happy"){
        dotColor = "green"
    }
    else if(mood === "neutral"){
        dotColor = "yellow"
    }
    else if(mood === "sad"){
        dotColor = "red"
    }

    newMarks[chiaveDate] = {marked: true, dotColor, selected: false, selectedColor: "transparent"}
    }

    setMarkedDates(newMarks)

    }, [moods])



    return(
        <View style={stylesScreen.containerAllNotes}>

            <View style={stylesScreen.containerCalendar}>

            <Calendar
            style={stylesScreen.calendar}
            markedDates={markedDates}
            onDayPress={(day) => {
                setSelectedDate(day.dateString)
                setText(notes[day.dateString] || "")
            }}
            
            />

            <Text style={stylesScreen.textCalendar}>Data Selezionata : {selectedDate}</Text>
            </View>


            
        </View>
    )
}