import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Welcome from '@/pages/Welcome';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/course" element={<Home />} />
    </Routes>
  );
};

export default Routing;
