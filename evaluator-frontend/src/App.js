import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import TeacherPage from './pages/TeacherPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/teacherpage' component={TeacherPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;