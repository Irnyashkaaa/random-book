import './App.css';
import { Books } from './Components/Books.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (

      <div style={{ background: 'rgba(43, 35, 35, 1)' }}>
            <BrowserRouter >

        <Routes>
          <Route path='*' element={<Books />} />
        </Routes>
        </BrowserRouter>
      </div>


  );
}

export default App;
