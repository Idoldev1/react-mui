import { Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState('')
    return(
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
            <TextField label='Name' variant="outlined"></TextField>
            <TextField label='Name' variant="filled"></TextField>
            <TextField label='Name' variant="standard"></TextField>
            </Stack>
            <Stack direction='row' spacing={2}>
            <TextField label='Small Secondary' size="small" color="secondary"></TextField>
            </Stack>

            <Stack direction='row' spacing={2}>
            <TextField label='Password'
             type="password"
              size="small"
              value={value}
              onChange={e => setValue(e.target.value)}
              required helperText={!value? 'Required': 'Do not share your password'}
              error={!value}
              
              ></TextField>

          <TextField label='Read Only'
          InputProps={{readOnly: true}}
            type="password"
            size="small"
            required />
        </Stack>
      </Stack>
    )
}