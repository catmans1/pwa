import { Routes, Route } from 'react-router-dom';

import { Home, User } from 'pages';

function App() {

  return (
    <div className='relative h-screen bg-gray-100'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='user' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
