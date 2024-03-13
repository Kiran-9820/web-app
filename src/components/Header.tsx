// components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import menu from '../hamburger.png';
import logo from '../logo.png';
import staticMap from '../static-map.png';
import MapComponent from './Mapcomponent';

interface TableRow {

  name: string;
  population: number|string;
}

interface TableData {
  [key: string]: TableRow[]; // Index signature for type 'string'
}

const Header: React.FC = () => {
  const [isLeftBarOpen, setLeftBarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [tableData, setTableData] = useState<TableRow[]>([]);

  const handleToggleLeftBar = () => {
    setLeftBarOpen(!isLeftBarOpen);
  };

  const wrapperStyle = {
    marginLeft: isLeftBarOpen ? '-155px' : '0',
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    const data = getTableDataForOption(selectedValue);
    setTableData(data);
  };

  const getTableDataForOption = (option: string): TableRow[] => {
    const tableDataMapping: TableData = {
      states: [
        { name: 'Andhra Pradesh', population: 53903393 },
        { name: 'Arunachal Pradesh', population: 1570458 },
        { name: 'Assam', population: 35607039 },
        { name: 'Bihar', population: 124799926 },
        { name: 'Chhattisgarh', population: 29436231 },
        { name: 'Goa', population: 1542734 },
        { name: 'Gujarat', population: 63872399 },
        { name: 'Haryana', population: 28204692 },
        { name: 'Himachal Pradesh', population: 7304582 },
        { name: 'Jharkhand', population: 38593948 },
        { name: 'Karnataka', population: 67562686 },
        { name: 'Kerala', population: 35699443 },
        { name: 'Madhya Pradesh', population: 85358965 },
        { name: 'Maharashtra', population: 123144223 },
        { name: 'Manipur', population: 3091545 },
        { name: 'Meghalaya', population: 3366710 },
        { name: 'Mizoram', population: 1239244 },
        { name: 'Nagaland', population: 2249695 },
        { name: 'Odisha', population: 46356334 },
        { name: 'Punjab', population: 30141373 },
        { name: 'Rajasthan', population: 81032689 },
        { name: 'Sikkim', population: 690251 },
        { name: 'Tamil Nadu', population: 77841267 },
        { name: 'Telangana', population: 39362732 },
        { name: 'Tripura', population: 4169794 },
        { name: 'Uttar Pradesh', population: 224979423 },
        { name: 'Uttarakhand', population: 11141048 },
        { name: 'West Bengal', population: 91276115 },
        // Add more states and their population here
      ],
      districts: [
        {  name: 'District 1', population: 500000 },
        { name: 'District 2', population: 700000 },
      ],
      countries: [
        { name: 'Country 1', population: 100000000 },
        {name: 'Country 2', population: 200000000 },
      ],
    };

    return tableDataMapping[option] || [];
  };

  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className={`sidebar ${isLeftBarOpen ? 'left-bar-hidden' : ''}`}>
        <div id="home">
          <Link to="/" className="custom-link">
            Home
          </Link>
        </div>
        <div id="about">
          <Link to="/about" className="custom-link">
            Maps
          </Link>
        </div>
        <div id="contact">
          <Link to="/contact" className="custom-link">
            Contact
          </Link>
        </div>
      </div>
      <div className="inner-body">
        <nav className="nav-bar">
          <img src={menu} className="icon" onClick={handleToggleLeftBar} />
          <img src={logo} className="logo" />
        </nav>
        <div className="map">
          <MapComponent />
          <div className="box">
            <label  className="select-option">Select an option: </label>
            <select value={selectedOption} onChange={handleOptionChange} className="dropdown-menu">
              <option value="">Select...</option>
              <option value="states">States</option>
              <option value="districts">Districts</option>
              <option value="countries">Countries</option>
            </select>

            {selectedOption && (
              <div>
                <h2>{`Table for ${selectedOption}`}</h2>
                <table className="data-table">
                  <thead>
                    <tr>
                      
                      <th>Name</th>
                      <th>Population</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item: TableRow) => (
                      <tr key={item.name}>
                       
                        <td>{item.name}</td>
                        <td>{item.population}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
