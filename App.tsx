
import AppNavigator from './src/Navigation/AppNavigator';
import {MoodProvider} from "./src/Contexts/MoodContext"
export default function App() {


return (
    <MoodProvider>
      <AppNavigator />
    </MoodProvider>
)};
