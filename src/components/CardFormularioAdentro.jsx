
import { Typography, Box } from '@mui/material';

const CardFormularioAdentro=( { horario})=>{
    return <Box>
         <Typography variant="h5" component="div" gutterBottom>
                                        Información de reserva
                                    </Typography>
                                    <Typography variant="h6" component="div" gutterBottom style={{ borderBottom: '1px solid rgb(224, 224, 224)' }}>
                                        {horario}
                                    </Typography>
    </Box>
}
export default CardFormularioAdentro