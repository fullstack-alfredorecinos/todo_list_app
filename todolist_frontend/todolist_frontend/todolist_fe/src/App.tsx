import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/Login.tsx';
import Task from './components/task/Task.tsx';
import NotFound from './components/commons/NotFound.tsx';
import type { CSSProperties } from 'react';

const FooterStyles: CSSProperties = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '10px',
  backgroundColor: '#2e2e2eff',
  textAlign: 'center',
}


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<Task />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
      <footer style={FooterStyles}><p>App To do List Full Stack 2025</p></footer>
    </>
  )
}

export default App
