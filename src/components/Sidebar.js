import Box from '@mui/material/Box'
import tartaruga from './assets/img/tartaruga.jpeg'
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVb9RKRrlqpsD1POmoMqvVDCW8Ty7o3B4B8Q&usqp=CAU"/>
            <hr />
            <img
                style={{
                    width: 200,
                    heigh: 120
                }}
                src={tartaruga}
                alt="Tartaruga nadando"
            />
            <hr />
        </Box>
    )
}

export default Sidebar