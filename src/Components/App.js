import WelcomeScreen from './WelcomeScreen';
import QuestionsScreen from './QuestionsScreen';
import deck from './Deck'
import { useState } from 'react';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  
  return (
    <>
    {isStarted ? <QuestionsScreen deck={deck}/> : <WelcomeScreen isStartet = {isStarted} setIsStarted = {setIsStarted}/>}    
    </>
  );
}
