import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App = () => {
  return (
    <div>
     
      <Navbar />
      <TextForm heading='Enter the text'/>

    </div>
  );
};

export default App;