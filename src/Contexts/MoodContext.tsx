import { createContext, ReactNode, useContext, useState } from "react";
import { Text } from "react-native";




    /*Definisco i tipi pegli stati */

    type DailyMood = { [date: string]: 'happy' | 'neutral' | 'sad' }

    type DailyNote = { [date: string]: string }

    type MoodContextType = {
        moods: DailyMood;
        notes: DailyNote;
        setMoodForDate: (date: string, mood: 'happy' | 'neutral' | 'sad') => void; /* => void la funzione non restituisce nulla, in TS da mettere anche tipo del risultato  */
        setNoteForDate: (date: string, message: string) => void; /* se restituiva un valore mettere il tipo del valore */
    };

    const MoodContext = createContext<MoodContextType | undefined>(undefined)

    export function moodProvider({children} : {children: ReactNode}){ /* ReactNode = qualsiasi cosa renderizzabile da react, qualsiasi elemento renderizzabile. */
      const [moods, setMoods] = useState<DailyMood>({});
      const [notes, setNotes] = useState<DailyNote>({});

      const setMoodForDate = function (date: string, mood: 'happy' | 'neutral' | 'sad') {
        /* [date]: mood, dice di usare il contenuto della variabile date come proprietà. Se non avessi messo [], sarebbe stato date: mood */
        setMoods(prev => ({...prev, [date]: mood}))
      }

       const setNoteForDate = function (date: string, message: string) {
        setNotes(prev => ({...prev, [date]: message}))
      }

      return(
      <MoodContext.Provider value={{moods, notes, setMoodForDate, setNoteForDate}}>
          {children}
      </MoodContext.Provider>    
      )
    }


    /* Funzione custom semplice per utilizzare il contesto */

    export function useMood(){
    const context = useContext(MoodContext)

    if(!context){
        throw new Error("Per il contesto devi stare dentro il Provider")
    }
    return context
    }

   


