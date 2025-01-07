import React from "react";
import TextField from "@mui/material/TextField";

const CustomTextField = ({ label, value, onChange, ...props }) => (
  <TextField
    label={label}
    variant="outlined"
    fullWidth
    value={value}
    onChange={onChange}
    sx={{
      marginBottom: "10px",
      backgroundColor: "#EAEAEA",
      "& .MuiInputLabel-root": { color: "#3c3c3c" },
      "& .MuiOutlinedInput-root": { color: "#3c3c3c" },
    }}
    {...props}
  />
);

export default CustomTextField;
