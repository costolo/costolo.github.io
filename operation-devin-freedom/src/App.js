import './App.css';
import FlipCountdown from '@rumess/react-flip-countdown';

function App() {
  return (
    <div className="App">
      <div className="body">
        <header>Time until Devin is a free man.</header>
        <FlipCountdown endAtZero size="large" endAt={'2021-06-18'} hideYear hideMonth dayTitle="days" hourTitle="hours" minuteTitle="minutes" secondTitle="seconds" />
      </div>
      <div className="ie"></div>
    </div>
  );
}

export default App;
