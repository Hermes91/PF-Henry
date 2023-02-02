import './App.css';
import { Route, Routes } from 'react-router-dom';
import GrillCard from './components/grillCard/grillCard';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<GrillCard />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
