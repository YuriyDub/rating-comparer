import { Box, Card, CardContent, Chip, Divider, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { EditableSpan } from './EditableSpan';
import { useState } from 'react';

export const RatingCard = ({ rating, deleteHandler, editHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  return (
    <Card
      key={rating.id}
      sx={{ cursor: 'pointer', height: '100%' }}
      onClick={() => {
        navigate(`/ratings/${rating.id}`);
      }}>
      <CardContent onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            justifyContent: 'center',
          }}>
          <EditableSpan
            title={rating.name}
            edit={editHandler}
            value={rating.name}
            component={
              <Typography
                variant="h7"
                component={'h3'}
                sx={{ textAlign: 'center', position: 'relative' }}>
                {rating.name}
              </Typography>
            }
          />
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              deleteHandler();
            }}
            size="small"
            sx={{
              opacity: isHovered ? 1 : 0,
              transition: '0.1s ease-in-out',
              position: 'absolute',
              right: -5,
              top: -5,
            }}>
            <ClearIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1, pt: 0.5, pb: 0.5 }} />
        {rating.subjects?.map((s) => (
          <Chip key={s.id} label={s.name} sx={{ m: '4px', cursor: 'pointer' }} />
        ))}
      </CardContent>
    </Card>
  );
};
