import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#AABD30",
    },
    secondary: {
      main: '#f44336',
    },
  },
});


function Footer() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  

  return (
		<ThemeProvider theme={theme}>
    <Box sx={{ pb: 7 }} ref={ref} borderColor="black">
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
					<a href="/alimentos">						<BottomNavigationAction label="Alimentos" icon={<LunchDiningIcon />} /></a>
					<a href="/bebidas"> <BottomNavigationAction label="Bebidas" icon={<SportsBarIcon />} /></a>
          <a href="/contacto"><BottomNavigationAction label="Pedidos" icon={<WhatsAppIcon />} /></a>
        </BottomNavigation>
      </Paper>
    </Box>
		</ThemeProvider>
  );
}

const messageExamples = [
];
