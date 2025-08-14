import React, { useMemo } from 'react';
import {
    Container,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import moment from 'moment';

const CardEvent = React.memo(({ event }) => {

    const img = useMemo(() => {
        return event.image ? event.image : "/assets/noimage.png";
    }, [event.image]);
    console.log("event.uuid",event.uuid)
    return (
        <Container key={event.uuid}>
            <Container maxWidth="sm" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
               
            }}>
                <img
                    srcSet={`${img}`}
                    src={`${img}`}
                    alt={event.name}
                    loading="lazy"
                    height={300}
                    width={400}
                />
            </Container>

            <ListItem>
                <ListItemText
                    primary={event.name}
                    secondary={`Data: ${moment(event.date).format("DD/MM/YYYY HH:mm")} | Local: ${event.local}`}
                />
            </ListItem>
            <Divider />
        </Container>
    )

})

export default CardEvent