import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationTabs from './components/NavigationTabs';
import PreMatch from './pages/PreMatch';
import MatchTime from './pages/MatchTime';
import PostMatch from './pages/PostMatch';

function App() {
  return (
    <Router>
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<PreMatch />} />
        <Route path="/match" element={<MatchTime />} />
        <Route path="/post" element={<PostMatch />} />
      </Routes>
    </Router>
  );
}

export default App;