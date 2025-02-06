import './App.css';
import Coffee from './components/Coffee';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CoffeeProvider } from './Context/CoffeeApi';

const theme = createTheme({
  typography: {
    fontFamily: 'main',
  },
});

function App() {
  return (
    <CoffeeProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Coffee />
        </div>
      </ThemeProvider>
    </CoffeeProvider>
  );
}

export default App;
