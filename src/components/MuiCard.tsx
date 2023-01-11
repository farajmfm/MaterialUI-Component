import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

export const MuiCard = () => {
    return (
        <Box width='300px'>
            <Card elevation={6}>
                <CardMedia 
                    component='img'
                    height='140px'
                    image='https://source.unsplash.com/random'
                    alt='unsplash image'
                    >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        React is a JavaScript library for building user interfaces. 
                        Learn what React is all about on our homepage or in the tutorial.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' variant='text'>Share</Button>
                    <Button size='small' variant='text'>Learn More...</Button>
                </CardActions>
            </Card>
        </Box>
    )
}