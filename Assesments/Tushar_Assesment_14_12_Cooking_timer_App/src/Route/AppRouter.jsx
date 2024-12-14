import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimerList from '../pages/TimerList';
import AddTimer from '../components/addtimer';
import EditTimer from '../components/EditTimer';
import MainLayout from '../layout/MainLayout';

function AppRouter() {
  return (<>
    
    <MainLayout >
      <Router>
        <Routes>
          <Route path="/" element={<TimerList />} />
          <Route path="/add" element={<AddTimer />} />
          <Route path="/edit/:id" element={<EditTimer />} />
        </Routes>
      </Router>
    </MainLayout>
    
    </>);
}

export default AppRouter;
