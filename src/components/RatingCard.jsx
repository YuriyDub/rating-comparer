import { Box, Card, CardContent, Chip, Divider, IconButton, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';


export const RatingCard = ({ rating, deleteHandler }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ cursor: 'pointer', height: '100%' }}
      onClick={() => {
        navigate(`/ratings/${rating.id}`);
      }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Typography variant="h7" component={'h3'} sx={{ textAlign: 'center', width: '100%' }}>
            {rating.name}
          </Typography>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              deleteHandler();
            }}
            size="small"
            sx={{
              position: 'absolute',
              right: -5,
              top: -5,
            }}>
            <ClearIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />
        {rating.subjects?.map((s) => (
          <Chip key={s.id} label={s.name} sx={{ m: '4px' }} />
        ))}
      </CardContent>
    </Card>
  );
};
