import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import MenuBar from "./components/MenuBar";
import ImageCard from "./components/ImageCard";
import BambaCard from "./components/BambaCard";

//Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4d51c5',
    },
    secondary: {
      main: '#67bcc1',
    }
  },
  text: {
    primary: {
      main: '#0f0f17',
    }
  },
  typography: {
    fontFamily: 'Archivo',
  }
});

//App Structure
function App() {

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <MenuBar />
        <Container sx={{ marginY: 5 }}>

          <Typography 
            variant="h3" component="h3" color="white" fontWeight={600} textAlign="center" marginBottom={5}>
            Game Demos
          </Typography>;
          <Grid container spacing={3}>
          
            <BambaCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
