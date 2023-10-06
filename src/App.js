import './App.css';
import { MantineProvider, createTheme, rem } from '@mantine/core';
import '@mantine/core/styles.css';
import Main from './components/main/Main';

const theme = createTheme({
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Main/>
    </MantineProvider>
  );
}

export default App;