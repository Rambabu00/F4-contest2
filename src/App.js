import React from 'react';
import Component from './Component';
import './index.css';
import Loading from './Loading';

const App = () => {
  return (
   
     <>
     <Loading />
     <div id='table'>

      <Component />
    </div>
     
     </>
  );
};

export default App;
