import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from 'react'

export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([])
    console.log({countries})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    return (
        <Box width='250px'>
            <TextField label='Select Country' select value={countries} onChange={handleChange} fullWidth SelectProps={{
                multiple: true
            }} size='medium' color='secondary' helperText='Please Select Your Country' error>
                <MenuItem value='SL'>Sri Lanka</MenuItem>
                <MenuItem value='IND'>India</MenuItem>
                <MenuItem value='UAE'>United Arab Emirates</MenuItem>
                <MenuItem value='SWT'>Switzerland</MenuItem>
            </TextField>
        </Box>
    )
}