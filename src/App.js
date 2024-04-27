//  import  from './logo.svg';
//  import { useState } from 'react';
// import nike from './nike.png'
//  import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           hello world
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;
// const App=()=>{
//   // const [url, seturl]=useState('./nike.png');
//   return (
//     <nav>
//       <div className="logo">

//         <img src={nike} alt="nike" />
//        <ul className='list'>

//         <li href="#">Menu</li>
//         <li href="#">Location</li>
//         <li href="#">About</li>
//         <li href="#">Contact</li>
//        </ul>
//        <button>login</button>
//       </div>
//     </nav>)


// };
// export default App;
// import React from 'react';
// import nike from './nike.png';
// import './App.css';

// const App = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <img src={nike} alt="nike" />
//       {/* 
//       </div><a href="#"Location</a></li> */}

//         <li><a href="#"Aboutk</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//       <button>login</button>
//     </nav>
//       <ul className='list'>
//         <li><a href="#">Menu</a></li>
//         <li><a href
//   );
// }

// export default App;
// import React from 'react';
// import nike from './nike.png';
// import './App.css';

// const App = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <img src={nike} alt="nike" />

//       </div>
//       <ul>
//          <li><a href="#">Location</a></li> 

//         <li><a href="#"Aboutk</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//       <button>login</button>
//     </nav>
//       <ul className='list'>
//         <li><a href="#">Menu</a></li>
//         <li><a href
//   );
// }

// // export default App;
// import React from 'react';
// import nike from './nike.png';
// import './App.css';

// const App = () => {
//   return (
//     <div>  <nav>
//     <div className="logo">
//       <img src={nike} alt="nike" />
    
//     </div>
//     <ul>
//        <li><a href="#">Location</a></li> 
import React from 'react';
import nike from './nike.png';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/hero';

const App = () => {
  return (
    <div>
    <Navigation/>
    <HeroSection/>
     
    </div>
  );
}

export default App;




