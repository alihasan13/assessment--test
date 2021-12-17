import React  from 'react'
import {Typography, AppBar, Card, CardActions,CardContent,CardMedia, CssBaseline,Grid,Toolbar,Container} from '@mui/material'
// import {PhotoCamera} from '@mui/material'
const ListItemComponent = () => {
    return (
        <>
        <CssBaseline />
        <AppBar position ="relative">
            <Toolbar>
                {/* <PhotoCamera/> */}
                <Typography variant ="h3">
                    Authors List

                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant = "h2" align='center' color="textPrimary" gutterBottom>
                        Author's List   
                    </Typography>
                    <Typography variant = "h5" align='center' color="textPrimary" gutterBottom>
                        This is material ui shit    
                    </Typography>

                </Container>
            </div>
        </main>
        </>
    )
}

export default ListItemComponent
