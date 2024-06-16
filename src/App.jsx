import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Nftmarketplace';
import DataTable from './components/DataTable';
import Profiles from './components/Profiles';
import SignIn from './components/SignIn';
import Rtladmin from './components/Rtladmin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="nftmarketplace" element={<Products />} />
          <Route path="datatables" element={<DataTable />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="rtladmin" element={<Rtladmin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
