import './App.css';
import pushupImg from './assets/images/pushup.png';
import runningImg from './assets/images/running.png';
import plankImg from './assets/images/plank.png';
import meditationImg from './assets/images/meditation.png';
import meditationAudio from "./assets/audio/guided-meditation.mp3"; // courtesy of 5 Minutes by Great Meditation (YouTube)
import soundwaves from "./assets/images/soundwaves.png";

import { useState } from 'react';
import MainMenu from './components/MainMenu';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import GuidedExercise from './components/GuidedExercise';

function App() {
  const [menuActive, setMenuActive] = useState(true);
  const [pushupsActive, setPushupsActive] = useState(false);
  const [runningActive, setRunningActive] = useState(false);
  const [planksActive, setPlanksActive] = useState(false);
  const [meditationActive, setMeditationActive] = useState(false);

  function activateMenu() {
    setMenuActive(true);
    setPushupsActive(false);
    setRunningActive(false);
    setPlanksActive(false);
    setMeditationActive(false);
  }

  function activatePushups() {
    setMenuActive(false);
    setPushupsActive(true);
  }

  function activateRunning() {
    setMenuActive(false);
    setRunningActive(true);
  }

  function activatePlanks() {
    setMenuActive(false);
    setPlanksActive(true);
  }

  function activateMeditation() {
    setMenuActive(false);
    setMeditationActive(true);
  }

  return (
    <>
      {menuActive && 
        <MainMenu 
          activatePushups={activatePushups}
          activateRunning={activateRunning}
          activatePlanks={activatePlanks}
          activateMeditation={activateMeditation}
          pushupImg={pushupImg}
          runningImg={runningImg}
          plankImg={plankImg}
          meditationImg={meditationImg}
        />}

      {pushupsActive && 
        <RepetitionExercise 
          name="pushups"
          exerciseImg={pushupImg}
          returnToMenu={activateMenu}
        />}

      {runningActive && 
        <DurationExercise 
          name="running"
          exerciseImg={runningImg}
          returnToMenu={activateMenu}
        />}

      {planksActive && 
        <RepetitionExercise 
          name="planks"
          exerciseImg={plankImg}
          returnToMenu={activateMenu}
        />}

      {meditationActive && 
        <GuidedExercise 
          name="guided meditation"
          exerciseImg={meditationImg}
          soundwaves={soundwaves}
          audioURL={meditationAudio}
          returnToMenu={activateMenu}
        />}
    </>
  );
}

export default App;
