import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const MenuBar = () => {
    return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aldo Guzman - Game Demos
          </Typography>
          </Toolbar>
</AppBar>
</Box>
}

export default MenuBar;