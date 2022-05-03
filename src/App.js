import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='shop' element={<Shop />} />
    </Routes>
  );
};

export default App;