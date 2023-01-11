import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from 'react'

export const MuiTextField = () => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined'></TextField>
                <TextField label='Name' variant='standard'></TextField>
                <TextField label='Name' variant='filled'></TextField>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Small Secondary' size='small' color='secondary'></TextField>
                <TextField label='Name' variant='standard' size='medium' color='success'></TextField>
                <TextField label='Name' variant='filled' size='small' color='info'></TextField>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' required value={value} onChange={e => setValue(e.target.value)} error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone!'}></TextField>
                <TextField label='Password' helperText='Do not share your password with anyone!'></TextField>
                <TextField label='Password' type='password' helperText='Do not share your password with anyone!'></TextField>
                <TextField label='Password' type='password' helperText='Do not share your password with anyone!' disabled></TextField>
                <TextField label='Read Only' inputProps={{readOnly: true}}></TextField>
            </Stack>
            
            <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}></TextField>
            <TextField label='Weight' InputProps={{endAdornment: <InputAdornment position='end'>Kg</InputAdornment>}}></TextField>
            </Stack>
        </Stack>
    )
}