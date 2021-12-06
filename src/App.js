import React, { useCallback, useState } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [allowToggle, setAllowToggle] = useState(false);

  const [listTitle, setListTitle] = useState('My List');

  console.log('App running');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevState) => !prevState);
  };

  const changeListTitleHandler = useCallback((event) => {
    setListTitle('New Title');
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <div>
        <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
        <Button onClick={changeListTitleHandler}>Change list title</Button>
      </div>
      <hr />
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
