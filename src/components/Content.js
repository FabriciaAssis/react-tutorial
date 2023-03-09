import Box from '@mui/material/Box'
import Alert from './Alert' 

const Content = () => {
    return (
        <Box sx={{
            background: "#DDD",
            display: 'flex-center',
            width: 800,
            height: 500
        }}>
            <h2>Content</h2>
            <Alert text="meu Alert" />
        </Box>
    )
}

export default Content