// import React from 'react';
// // import Drift from './components/drift'; 
// // import Road from './components/road'; 
// import HomePage from './components/HomePage';
// const App = () => {
//   return (
//     <div>
//       <h1> </h1>
//       <HomePage/>
//     </div>
//   );
// };

// export default App;
// App.js
// App.js
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import DriftLessons from './components/drift';
import RoadLessons from './components/road';

const App = () => {
  const [view, setView] = useState('home');

  const changeView = (newView) => {
    setView(newView);
  };

  let currentView;
  switch (view) {
    case 'drift':
      currentView = <DriftLessons />;
      break;
    case 'road':
      currentView = <RoadLessons />;
      break;
    default:
      currentView = <HomePage changeView={changeView} />;
      break;
  }

  return (
    <div>
      <h1>Driving School App</h1>
      {currentView}
    </div>
  );
};

export default App;
