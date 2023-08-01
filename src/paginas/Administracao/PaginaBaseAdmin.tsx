import { AppBar, Container, Toolbar, Typography, Box, Button, Paper, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink, Outlet } from 'react-router-dom'

const PaginaBaseAdmin = () => {
  return (
    <>
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar>
                <Typography variant="h6">
                    Administração
                </Typography>
                <Box sx={{display: 'flex', flexGrow: 1}}>
                    <Link component={RouterLink} to='/admin/restaurantes'>
                        <Button sx={{my: 2, color: 'white'}}> 
                            Restaurantes
                        </Button>
                    </Link>
                    <Link component={RouterLink} to='/admin/restaurantes/novo'>
                        <Button sx={{my: 2, color: 'white'}}> 
                            Novo restaurante
                        </Button>
                    </Link>
                    <Link component={RouterLink} to='/admin/pratos'>
                        <Button sx={{my: 2, color: 'white'}}> 
                           Pratos
                        </Button>
                    </Link>
                    <Link component={RouterLink} to='/admin/pratos/novo'>
                        <Button sx={{my: 2, color: 'white'}}> 
                            Novo prato
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>

    <Box>
        <Container maxWidth="lg" sx={{marginTop: 2}}>
            <Paper sx={{padding: 2}}>
                <Outlet />
            </Paper>
        </Container>
    </Box>
    
</>
  )
}

export default PaginaBaseAdmin