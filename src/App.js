import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Portfolio />
    </Router>
  );
}

export default App;