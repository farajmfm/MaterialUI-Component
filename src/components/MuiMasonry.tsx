import { Box, Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { Masonry } from '@mui/lab'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const heights = [
    150, 40, 100, 60, 50, 72, 80, 96, 120, 40, 60, 110, 72, 84, 20
]

export const MuiMasonry = () => {
    return (
        <Box sx={{ width: 500, minHeight: 400 }}>
            <Masonry columns={4} spacing={1}>
                {
                    heights.map((height, index) => (
                        <Paper
                           key={index}
                           sx={{
                            //display: 'flex',
                            //justifyContent: 'center',
                            //alignItems: 'center',
                            //height,
                            border: '1px solid'
                           }}
                        >
                            <Accordion sx={{ minHeight: height }}>
                                <AccordionSummary expandIcon={< ExpandMoreIcon />}>
                                    <Typography>Accordion {index + 1}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>Content</AccordionDetails>
                            </Accordion>
                        </Paper>   
                    ))
                }
            </Masonry>
        </Box>
    )
}