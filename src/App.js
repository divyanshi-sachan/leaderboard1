// import React from 'react';
// import Navbar from './components/Navbar';
// import './App.css'; // Corrected import statement

// function App() {
//   return (
//     <div className="App">
//         <Navbar />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import LeaderboardHeading from './components/LeaderboardHeading';
import BasicBacktestBox from './components/BasicBacktestBox';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <SubNavbar />
        <LeaderboardHeading />
        <BasicBacktestBox />

    </div>
  );
}

export default App;




