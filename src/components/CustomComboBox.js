import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CustomComboBox = ({ label, value, onChange, options }) => (
  <FormControl
    sx={{
      minWidth: 120,
      backgroundColor: '#fff',
      borderRadius: '20px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      '& .MuiInputBase-root': {
        borderRadius: '20px',
      },
    }}
  >
    <InputLabel>{label}</InputLabel>
    <Select value={value} onChange={onChange} label={label}>
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default CustomComboBox;
