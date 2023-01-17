// TODO
import React from 'react';

import './TimeFilter.css';

const RidesYearFilter
 = (props) => {

  const yearDropdownChangeHandler = (event) => {
    props.onChangeYearFilter(event.target.value);
  };

  return (
    <div className='rides-filter'>
      <div className='rides-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearDropdownChangeHandler} >
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default RidesYearFilter
;