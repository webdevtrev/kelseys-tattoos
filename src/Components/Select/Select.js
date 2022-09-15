import React from 'react';
import './Select.scss';
import colors from '../../variables';

import Select from 'react-select';

/**
 * @namespace Select
 * @function Select
 * @author Trevor Cash
 * @since 07/18/22
 * @version 1.0.0
 * @component
 */
export default function SelectDropdown({ options, onChange, name }) {
  const customStyles = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      backgroundColor: colors.background,
      color: colors.primary,
      ':hover': colors.primary,
    }),
    // dropdownIndicator: (provided, state) => {
    //   console.log(provided);
    // },
    control: (provided, state) => ({
      ...provided,
      backgroundColor: colors.background,
      borderWidth: '3px',
      borderColor: colors.body,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: colors.body,
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: colors.background,
      borderWidth: '3px',
      borderColor: colors.body,
      borderStyle: 'solid',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: colors.background,
      ':active': { color: colors.background, backgroundColor: colors.hr },
    }),
    // control: () => ({
    //   // none of react-select's styles are passed to <Control />
    //   width: 200,
    // }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';
    //   return { ...provided, opacity, transition };
    // },
  };
  return (
    <Select
      name={name}
      onChange={(e) => {
        onChange(e, 'Size');
      }}
      styles={customStyles}
      options={options}
    />
  );
}
