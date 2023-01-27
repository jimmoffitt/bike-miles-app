// TODO
import React from 'react';

import './TimeFilter.css';

const RidesMonthFilter
 = (props) => {

  const monthDropdownChangeHandler = (event) => {
    props.onChangeMonthFilter(event.target.value);
  };

  return (
    <div className='rides-filter'>
      <div className='rides-filter__control'>
        {/* <label>Filter by month</label> */}
        <select value={props.selected} onChange={monthDropdownChangeHandler} >
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>          
        </select>
      </div>
    </div>
  );
};

export default RidesMonthFilter;