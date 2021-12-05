import { memo } from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput running');
  return <MyParagraph>{props.show ? 'This is new content!' : ''}</MyParagraph>;
};

export default memo(DemoOutput);
