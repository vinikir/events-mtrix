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
import moment from 'moment';

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
                                console.log(event)
                                return (

                                    <div key={event.uuid}>
                                        <Container maxWidth="sm">
                                            <img
                                                srcSet={`${event.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${event.image}?w=248&fit=crop&auto=format`}
                                                alt={event.name}
                                                loading="lazy"
                                            />
                                        </Container>

                                        <ListItem>
                                            <ListItemText
                                                primary={event.name}
                                                secondary={`Data: ${moment(event.date).format("DD/MM/YYYY HH:mm")} | Local: ${event.local}`}
                                            />
                                        </ListItem>
                                        {index < events.length - 1 && <Divider />}
                                    </div>
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