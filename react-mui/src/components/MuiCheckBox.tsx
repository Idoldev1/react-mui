import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked)
  }
  return (
    <Box>
      <Box>
        <FormControlLabel label='I accept terms and condition'
          control={<Checkbox 
            checked={acceptTnC}
            color="secondary"
            onChange={handleChange}/>}
        />
      </Box>
      <Box>
        <Checkbox
        icon= {<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}
        checked={acceptTnC}
        color="success"
        onChange={handleChange}
        />
      </Box>
    </Box>
  )
}
