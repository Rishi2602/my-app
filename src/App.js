import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Todo from './Todo'
import Weather from './Weather'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
return(
  <div>
    
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="weather" element={<Weather />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>
)
}

export default App;