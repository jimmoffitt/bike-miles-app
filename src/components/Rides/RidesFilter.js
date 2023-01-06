// TODO
import React from 'react';

import './RidesFilter.css';

const RidesFilter = (props) => {

  const yearDropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
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

export default RidesFilter;