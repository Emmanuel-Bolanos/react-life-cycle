import Display from './shared/organisms/Display';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c51f5d',
    },
    secondary: {
      main: '#0bd3d3',
    },
    type: 'dark',
  },
  typography: {
    h1: {
      fontFamily: 'Speedster, Helvetica'
    },
    body1: {
      fontFamily: 'ViceCitySans, Arial'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Display />
    </ThemeProvider>
  );
}

export default App;
