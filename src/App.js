import './App.css';
import Navbar from './Navbar/index.js'
import PricingHeader from './Pricing-Header/index.js'
import Main from './Main/index.js'

function App() {
  return (
    <div className="wrap">
      <Navbar/>
      <PricingHeader/>
      <Main/>
    </div>
  );
}

export default App;
