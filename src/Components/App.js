import WelcomeScreen from './WelcomeScreen';
import QuestionsScreen from './QuestionsScreen';
import deck1 from './Deck1'
import { useState } from 'react';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  
  return (
    <>
    {isStarted ? <QuestionsScreen deck={deck1}/> : <WelcomeScreen isStartet = {isStarted} setIsStarted = {setIsStarted}/>}    
    </>
  );
}
