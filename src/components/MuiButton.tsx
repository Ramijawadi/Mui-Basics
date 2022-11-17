  import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import {useState} from 'react';

const MuiButton = () => {

    const [formats, setFormats] = useState<string | null>(null);
console.log({
    formats,
})
const handleFormatChange = (_event: React.MouseEvent<HTMLElement>,
     updatedFormats : string | null ) => {

setFormats(updatedFormats )
}

    return (

        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>

                <Button variant='text' href='https://www.google.com/search?q=google+traduction&oq=g&aqs=chrome.1.69i60j69i59j69i57j46i39i199i465j69i60l4.1674j0j7&sourceid=chrome&ie=UTF-8'>text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>

            </Stack>

            <Stack spacing={2} direction='row'>

                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='warning'>warning</Button>


                <Stack display='block' spacing={2} direction='row'>

                    <Button variant='contained' size='small'>sall</Button>
                    <Button variant='contained' size='medium'>meduim</Button>
                    <Button variant='contained' size='large'>large</Button>


                </Stack>


            </Stack>

            <Stack spacing={2} direction='row'>

                <Button variant='contained' startIcon={<SendIcon />} >send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation onClick={() => alert('clicked button')} >send</Button>


                <IconButton arial-label='send' color='success' size='large'>

                    <SendIcon />
                </IconButton>

            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' color='secondary' size='medium'>
                    <Button onClick={() => alert('left clicked')} >left</Button>
                    <Button onClick={() => alert('center clicked')}>center</Button>
                    <Button onClick={() => alert('right clicked')}>right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row' >

                <ToggleButtonGroup aria-label='text formatting' 
                 size='small' color='success' orientation='vertical' exclusive
                value={formats} onChange={handleFormatChange}   >

                    <ToggleButton value='italic' arial-label='bold'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='bold' arial-label='italic'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='underlined' arial-label='underlined'><FormatUnderlinedIcon /></ToggleButton>

                </ToggleButtonGroup>


            </Stack>


        </Stack>
    )
}

export default MuiButton