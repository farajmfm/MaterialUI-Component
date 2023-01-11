import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material"

export const MuiImageList = () => {
    return <Stack spacing={4}>
        <ImageList sx={{
            width: 500,
            height: 450
        }}
        cols={3}
        rowHeight={164}
        >
            {
                itemData.map(item => (
                    <ImageListItem key={item.img}>
                        <img 
                          src={'${item.img}?w=164&h=164&fit=crop&auto=format&drp=2'}
                          alt={item.title}
                          loading='lazy'
                        />
                        <ImageListItemBar title={item.title} />
                    </ImageListItem>
                ))
            }
        </ImageList>

        <ImageList variant='woven' sx={{
            width: 500,
            height: 450
        }}
        cols={3}
        gap={8}
        >
            {
                itemData2.map(item => (
                    <ImageListItem key={item.img}>
                        <img 
                          src={'${item.img}?w=164&h=164&fit=crop&auto=format&drp=2'}
                          alt={item.title}
                          loading='lazy'
                        />  
                    </ImageListItem>
                ))
            }
        </ImageList>
        <Box sx={{
                width: 500,
                height: 450,
                overflowY: 'scroll'
            }}>
            <ImageList variant='masonry' 
                cols={3}
                gap={8}
            >
                {
                    itemData3.map(item => (
                        <ImageListItem key={item.img}>
                            <img 
                               src={'${item.img}?w=248&fit=crop&auto=format&drp=2'}
                               alt={item.title}
                               loading='lazy'
                            />  
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </Box> 
    </Stack>
}

const itemData = [
    {
        img: 'https://unsplash.com/photos/gFwXcRjDtKQ',
        title: 'Morning'
    },
    {
        img: 'https://unsplash.com/photos/YHcqEzIS_vE',
        title: 'Evening'
    },
    {
        img: 'https://unsplash.com/photos/FOKLUjGbyi8',
        title: 'Winter'
    },
    {
        img: 'https://unsplash.com/photos/wfihSpnKuOs',
        title: 'America'
    },
    {
        img: 'https://unsplash.com/photos/3IqaDkyk7R8',
        title: 'Paris'
    },
    {
        img: 'https://unsplash.com/photos/0Ubbo1reXzc',
        title: 'Surfing'
    }
]

const itemData2 = [
    {
        img: 'https://unsplash.com/photos/O6khX6-XozY',
        title: 'Lion'
    },
    {
        img: 'https://unsplash.com/photos/fv6ebUZlECM',
        title: 'Cat'
    },
    {
        img: 'https://unsplash.com/photos/bmKbWks7pps',
        title: 'Elephant'
    },
    {
        img: 'https://unsplash.com/photos/hG7Om2XxmBQ',
        title: 'Horse'
    },
    {
        img: 'https://unsplash.com/photos/2rAlnE-ay5U',
        title: 'Zebra'
    },
    {
        img: 'https://unsplash.com/photos/6zfXIE04jBE',
        title: 'Owl'
    }
]

const itemData3 = [
    {
        img: 'https://unsplash.com/photos/KtDXt7DyfVM',
        title: 'Lotus Tower'
    },
    {
        img: 'https://unsplash.com/photos/okHJmxuamkI',
        title: 'Pettah'
    },
    {
        img: 'https://unsplash.com/photos/FyVzKHlGnBY',
        title: 'Floating Market'
    },
    {
        img: 'https://unsplash.com/photos/WZ7II1Z9694',
        title: 'Red Mosque'
    },
    {
        img: 'https://unsplash.com/photos/K09CKlFZdMs',
        title: 'World Trade Center'
    },
    {
        img: 'https://unsplash.com/photos/zDDQZgZjFtM',
        title: 'Sigiriya' 
    },
    {
        img: 'https://unsplash.com/photos/WUtQNQ-rQ6s',
        title: 'Marine Drive'
    },
    {
        img: 'https://unsplash.com/photos/TvIR3JAV2ME',
        title: 'Nine Arch Bridge'
    },
    {
        img: 'https://unsplash.com/photos/QwpjI5dJs-s',
        title: 'Colombo Port'
    }
]