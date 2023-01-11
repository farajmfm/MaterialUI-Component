import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { useState } from 'react'

export const MuiChip = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
    const handleDelete = (chipToDelete: string) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }
    return (
        <Stack direction='row' spacing={1}>
            <Chip label='Chip' color='primary' size='small' icon={<FaceIcon />} />
            <Chip 
                label='Chip Outlined' 
                color='secondary' 
                size='small' 
                variant='outlined' 
                avatar={<Avatar>V</Avatar>}
            />
            <Chip label='Click' color='success' onClick={() => alert('Clicked')} />
            <Chip label='Delete' color='error' onClick={() => alert('Clicked')} onDelete={() => alert('Delete handler called')} />

            {chips.map((chip) => (
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))}
        </Stack>
    )
}