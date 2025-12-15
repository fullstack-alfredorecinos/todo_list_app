import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, IconButton, Fab, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';


export default function Task() {
    const theme = useTheme();
    return (
        <>
            <Container
                sx={{
                    mx: 'auto',
                    px: {
                        xs: theme.custom?.spacing?.xs,
                        sm: theme.custom?.spacing?.sm,
                        md: theme.custom?.spacing?.md,
                        lg: theme.custom?.spacing?.lg,
                        xl: theme.custom?.spacing?.xl,
                        xxl: theme.custom?.spacing?.xxl
                    },
                    py: {
                        xs: 2, // padding-top y padding-bottom
                        sm: 2,
                        md: 2,
                        lg: 2,
                        xl: 2,
                        xxl: 2,
                    },
                    maxWidth: {
                        xs: theme.custom?.containerMaxWidth?.xs,
                        sm: theme.custom?.containerMaxWidth?.sm,
                        md: theme.custom?.containerMaxWidth?.md,
                        lg: theme.custom?.containerMaxWidth?.lg,
                        xl: theme.custom?.containerMaxWidth?.xl,
                        xxl: theme.custom?.containerMaxWidth?.xxl
                    },
                    background: {
                        xs: '#db3d55ff', // Rojo claro para XS (0-639px)
                        sm: '#cb8920ff', // Naranja claro para SM (640-767px)
                        md: '#52d45dff', // Verde claro para MD (768-1023px)
                        lg: '#258cd6ff', // Azul claro para LG (1024-1279px)
                        xl: '#b22ac7ff', // Púrpura claro para XL (1280-1439px)
                        xxl: '#50a953ff', // Verde azulado para XXL (1440px+) - Breakpoint personalizado
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, mb: 2 }}>
                    <Typography variant='h4' component="h1" color="primary">
                        Todo List
                    </Typography>
                    <IconButton color="primary" aria-label="Logout">
                        <LogoutIcon />
                    </IconButton>
                </Box>
                <List>
                    <ListItem secondaryAction={
                        <>
                            <IconButton edge="end" color="primary" aria-label="edit">
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" color="primary" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </>
                    }>
                        <ListItemText sx={{ color: 'primary.main' }} primary="Task 1" secondary="Fecha" />
                    </ListItem>
                </List>
                <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                    <AddIcon />
                </Fab>
            </Container>
        </>
    )
}
