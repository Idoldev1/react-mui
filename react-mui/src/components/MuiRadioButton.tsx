import { Box, FormControl, FormLabel,FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material";
import { useState } from "react";


export const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log({value})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return <Box>
    <FormControl>
      <FormLabel id='job-experience-group-label'>
        Years Of Experience
      </FormLabel>
      <RadioGroup name='job-experience-roup' 
      aria-labelledby="job-experience-group-label"
      value={value}
      onChange={handleChange}
      row
      >
        <FormControlLabel control={<Radio color="secondary" size="medium"/>} label='0-2' value='0-2'></FormControlLabel>
        <FormControlLabel control={<Radio  color="success"/>} label='3-5' value='3-5'></FormControlLabel>
        <FormControlLabel control={<Radio />} label='6-8' value='6-8'></FormControlLabel>

      </RadioGroup>
    </FormControl>
  </Box>
}