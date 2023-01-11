import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <div>
            <Accordion 
                expanded={expanded === 'panel1'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
            >
                <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>React</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        React 18 was years in the making, and with it brought valuable lessons for the React team. 
                        Its release was the result of many years of research and exploring many paths.
                        Some of those paths were successful; many more were dead-ends that led to new insights. 
                        One lesson we’ve learned is that it’s frustrating for the community to wait for new features without having insight into these paths that we’re exploring.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                expanded={expanded === 'panel2'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
                >
                <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Material UI</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Material UI is an open-source React component library that implements Google's Material Design.
                        It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.
                        Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                expanded={expanded === 'panel3'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
            >
                <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Java Script</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. 
                        While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. 
                        JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
                        JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for...in and Object utilities), and source-code recovery (JavaScript functions store their source text and can be retrieved through toString()).
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}