import WelcomeScreen from './WelcomeScreen';
import QuestionsScreen from './QuestionsScreen'
import { useState } from 'react';

export default function App() {
  const [isStarted, setIsStarted] = useState(false)
  return (
    <>
    {isStarted ? <QuestionsScreen /> : <WelcomeScreen isStartet = {isStarted} setIsStarted = {setIsStarted}/>}    
    </>
  );
}
