// import React, { useState } from 'react';
// import './BasicBacktestBox.css';

// const BasicBacktestBox = () => {
//   const [slippageOpen, setSlippageOpen] = useState(false);
//   const [selectedSlippage, setSelectedSlippage] = useState('0%');

//   const toggleSlippageDropdown = () => {
//     setSlippageOpen(!slippageOpen);
//   };

//   const handleSlippageChange = (slippage) => {
//     setSelectedSlippage(slippage);
//     setSlippageOpen(false);
//   };

//   return (
//     <div className="basic-backtest-box">
//       <div className="basic-backtest-header">
//         <div className="basic-backtest-heading">Basic Backtest</div>
//         <div className="slippage-dropdown">
//           <button onClick={toggleSlippageDropdown}>Slippage: {selectedSlippage}</button>
//           {slippageOpen && (
//             <div className="dropdown-content">
//               <button onClick={() => handleSlippageChange('0%')}>0%</button>
//               <button onClick={() => handleSlippageChange('0.5%')}>0.5%</button>
//               <button onClick={() => handleSlippageChange('1%')}>1%</button>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* Data display goes here */}
//     </div>
//   );
// };

// export default BasicBacktestBox;


import React, { useState } from 'react';
import './BasicBacktestBox.css';

const BasicBacktestBox = () => {
  const [slippageOpen, setSlippageOpen] = useState(false);
  const [selectedSlippage, setSelectedSlippage] = useState('0%');

  const toggleSlippageDropdown = () => {
    setSlippageOpen(!slippageOpen);
  };

  const handleSlippageChange = (slippage) => {
    setSelectedSlippage(slippage);
    setSlippageOpen(false);
  };

  return (
    <div className="basic-backtest-box">
      <div className="basic-backtest-header">
        <div className="basic-backtest-heading">Basic Backtest</div>
        <div className="slippage-dropdown">
          <button onClick={toggleSlippageDropdown}>Slippage: {selectedSlippage}</button>
          {slippageOpen && (
            <div className="dropdown-content">
              <button onClick={() => handleSlippageChange('0%')}>0%</button>
              <button onClick={() => handleSlippageChange('0.5%')}>0.5%</button>
              <button onClick={() => handleSlippageChange('1%')}>1%</button>
            </div>
          )}
        </div>
      </div>
      <div className="table-container">
        <table className="backtest-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Calmar Ratio</th>
              <th>Overall Profit</th>
              <th>Avg. Daily Profit</th>
              <th>Win %(Day)</th>
              <th>Price (Rs)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>strategy_name</td>
              <td>3.62</td>
              <td>268872.5</td>
              <td>216.31</td>
              <td>0.64</td>
              <td>500</td>
              <td><button>Buy</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Based on premium and</td>
              <td>3.42</td>
              <td>255425</td>
              <td>208.51</td>
              <td>0.64</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>strategy_name</td>
              <td>3.22</td>
              <td>370845</td>
              <td>303.47</td>
              <td>0.65</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>strategy_name</td>
              <td>3.22</td>
              <td>370845</td>
              <td>303.47</td>
              <td>0.65</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Based on premium wit</td>
              <td>3.01</td>
              <td>135980</td>
              <td>185.77</td>
              <td>0.49</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>strategy_name</td>
              <td>2.76</td>
              <td>267867.5</td>
              <td>218.49</td>
              <td>0.6</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Wait and trade_Save</td>
              <td>2.62</td>
              <td>178252.5</td>
              <td>161.9</td>
              <td>0.63</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>9</td>
              <td>iron condor</td>
              <td>2.44</td>
              <td>176420</td>
              <td>137.51</td>
              <td>0.65</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>10</td>
              <td>strategy_name</td>
              <td>2.04</td>
              <td>244555</td>
              <td>198.66</td>
              <td>0.62</td>
              <td>-</td>
              <td><button>View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicBacktestBox;


