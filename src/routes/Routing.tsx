import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Accounting from '@/pages/Accounting/Accounting';
import Welcome from '@/pages/Welcome';
import Tax from '@/pages/Tax/Tax';
import QuickBooks from '@/pages/Quickbooks/Quickbooks';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/course" element={<Home />} />
      <Route path="/accounting-help" element={<Accounting />} />
      <Route path="/quickbooks-courses" element={<QuickBooks />} />
      <Route path="/tax-deducations" element={<Tax />} />
    </Routes>
  );
};

export default Routing;
