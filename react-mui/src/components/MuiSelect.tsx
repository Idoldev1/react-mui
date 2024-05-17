import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([])
  console.log({ countries})
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box width='200px'>
      <TextField label='Select Country' 
      select value={countries} 
      onChange={handleChange}
      fullWidth
      SelectProps={{
        multiple: true
      }}
      size='small'
      color="secondary"
      helperText='Please select your country'>
        <MenuItem value= 'SE'>Select...</MenuItem>
        <MenuItem value= 'IN'>India</MenuItem>
        <MenuItem value= 'USA'>United States</MenuItem>
        <MenuItem value= 'AU'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}