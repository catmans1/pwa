import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, MyCourse } from 'pages';

function App() {

  return (
    <div className='relative h-screen bg-gray-100'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='myCourse' element={<MyCourse />} />
      </Routes>
    </div>
  );
}

export default App;
