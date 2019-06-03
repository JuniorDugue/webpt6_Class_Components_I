import React from 'react';
import ReactDOM from 'react-dom';
import HogwartsStudents from './components/HogwartsStudents';
import './styles.css';

// import HogwartsStudents and display it inside App;
function App() {
  return (
    <div className="App">
      <HogwartsStudents />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
