import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme(
  adaptV4Theme({
    transitions: {
      duration: {
        shortest: 150,
      },
    },
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  })
);

export default theme;
