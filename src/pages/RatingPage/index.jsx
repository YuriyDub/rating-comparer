import { Box, Divider, Grid } from '@mui/material';
import { RatingCard } from '../../components/RatingCard';
import { useDispatch, useSelector } from 'react-redux';
import { addRating, removeRating } from '../../store/slices/ratingsSlice';
import { RatingForm } from '../../components/RatingForm';

export const RatingPage = () => {
  const { list } = useSelector((state) => state.ratings);

  const dispatch = useDispatch();

  return (
    <Box sx={{ d: 'flex', justifyContent: 'center', mt: 15 }}>
      <RatingForm
        name="rating"
        addItem={(rating) => {
          dispatch(addRating(rating));
        }}
      />
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        {list?.map((r) => (
          <Grid key={r.id} item xs={12} sm={6} md={4}>
            <RatingCard rating={r} deleteHandler={() => dispatch(removeRating({ id: r.id }))} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
