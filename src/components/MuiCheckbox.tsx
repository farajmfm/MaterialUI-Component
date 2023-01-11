import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    console.log({ acceptTnC })
    console.log({ skills })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }    

    const handleSkillChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
    return (
        <Box>
            <Box>
                <FormControlLabel 
                    label='I accepted terms & conditions' 
                    control={< Checkbox checked={acceptTnC} onChange={handleChange} />} 
                />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={< BookmarkIcon/>} checked={acceptTnC} onChange={handleChange} />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                    <FormControlLabel 
                        label='HTML' 
                        value='html' 
                        control={< Checkbox size='medium' color='secondary' checked={skills.includes('html')} onChange={handleSkillChange} />}
                    />
                    <FormControlLabel 
                        label='CSS' 
                        value='css' 
                        control={< Checkbox size='medium' color='secondary' checked={skills.includes('css')} onChange={handleSkillChange} />} 
                    />
                    <FormControlLabel 
                        label='JavaScript' 
                        value='javascript' 
                        control={< Checkbox size='medium' color='secondary' checked={skills.includes('javascript')} onChange={handleSkillChange} />} 
                    />
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
    
}