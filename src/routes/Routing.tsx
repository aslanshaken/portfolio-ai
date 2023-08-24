import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Welcome from '@/pages/Welcome';
import Tax from '@/pages/Tax/Tax';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/course" element={<Home />} />
      <Route path="/tax-deducations" element={<Tax />} />
    </Routes>
  );
};

export default Routing;
