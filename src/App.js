import React from 'react';
import Banner from './components/Banner';
import InformationCharts from './components/InformationCharts';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <div>
        <Banner />
        <InformationCharts />
        <Footer />
    </div>
  );
}

export default App;
