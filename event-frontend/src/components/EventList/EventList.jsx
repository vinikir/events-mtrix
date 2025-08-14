import {
    Container,
    Typography,
    CircularProgress,
    List,
    ListItem,
    ListItemText,
    Paper,
    Box,
    Divider,
} from '@mui/material';
import CardEvent from '../CardEvent/CardEvent';
const Eventlist = ({ events, isLoading }) => {
    if (isLoading) {
        return (
            <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
                <CircularProgress />
                <Typography variant="h6" sx={{ mt: 2 }}>Carregando eventos...</Typography>
            </Container>
        )
    }
    return (
        <Container maxWidth="md">

            <Box sx={{ my: 4 }}>

                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Eventos Disponíveis
                </Typography>

                <Paper elevation={3}>

                    <List>
                        {events.length > 0 ? (
                            events.map((event, index) => {
                                
                                return (

                                   <CardEvent event={event} />

                                )
                            })
                        ) : (
                            <ListItem>
                                <ListItemText primary="Nenhum evento encontrado." />
                            </ListItem>
                        )}
                    </List>

                </Paper>
                
            </Box>
        </Container>
    )
}

export default Eventlist