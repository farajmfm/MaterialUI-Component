import { Stack, CircularProgress, LinearProgress } from '@mui/material'

export const MuiProgress = () => {
    return (
        <Stack spacing={2}>
            <CircularProgress />
            <CircularProgress color='secondary' />
            <CircularProgress variant='determinate' value={75} />

            <LinearProgress />
            <LinearProgress color='secondary' />
            <LinearProgress variant='determinate' value={75} />

        </Stack>
    )
}