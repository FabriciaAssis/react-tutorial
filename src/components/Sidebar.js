import Box from '@mui/material/Box'
import {GiTurtle} from 'react-icons/gi'

const Sidebar = () => {
    return (
        <Box sx={{
            background: "#DDD",
            width: 200,
            height: 500
        }}>
            <h2>Sidebar</h2>
            <img style={{
                width: 200,
                heigh: 123.83
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVb9RKRrlqpsD1POmoMqvVDCW8Ty7o3B4B8Q&usqp=CAU"></img>
        </Box>
    )
}

export default Sidebar