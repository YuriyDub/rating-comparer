import { Box, IconButton, Paper, Popover } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export const AddItemPopup = ({ children, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <IconButton onClick={handleClick}>
        <AddIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: 1,
          }}>
          {children}
        </Paper>
      </Popover>
    </Box>
  );
};
