import React, { useCallback, useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App running');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevState) => !prevState);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <p>
        <Button onClick={allowToggleHandler}>Allow toggling</Button>
      </p>
      <p>
        <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
      </p>
    </div>
  );
}

export default App;
