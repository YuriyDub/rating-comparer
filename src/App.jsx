import { AppBar, Box, Button, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Typography from '@mui/material/Typography';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RatingPage } from './pages/RatingPage';
import { Detailed } from './pages/RatingPage/Detailed';

const pages = ['ratings', 'stats'];

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  my: 2,
                  color: 'white',
                  gap: '5px',
                  display: { xs: 'none', md: 'flex' },
                }}>
                <TrendingUpIcon />
                <Typography>Rating Comparer</Typography>
              </Button>
            </Link>
            <Box
              sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NavLink style={{ textDecoration: 'none' }} to={`/${page}`}>
                  <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Box
              sx={{
                justifyContent: 'right',
                flexGrow: { xs: 1, md: 0 },
                display: { xs: 'flex', md: 'block' },
              }}>
              <IconButton sx={{ p: 0 }}>
                <AccountCircleIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" />
          <Route path="/stats" />
          <Route path="/ratings" element={<RatingPage />} />
          <Route path="/ratings/:id" element={<Detailed />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
