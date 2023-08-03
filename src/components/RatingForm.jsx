import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { v1 } from 'uuid';

export const RatingForm = (props) => {
  const [subjects, setSubjects] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    getValues,
  } = useForm({ mode: 'onBlur' });

  const addRating = (data) => {
    if (data?.name?.trim() === '') {
    } else {
      props.addItem({ name: data.name, subjects: data.subjects, id: v1() });
      reset();
    }
  };

  const addSubject = (name) => {
    if (name?.trim() === '') {
    } else {
      setSubjects((prev) => [...prev, { name, id: v1() }]);
      setValue('subjects', subjects);
    }
  };

  const removeSubject = (id) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: { xs: 'inherit', md: 'start' },
        flexDirection: 'column',
        minHeight: 120,
        mb: 2,
        p: 2,
      }}
      component="form"
      onSubmit={handleSubmit((data) => {
        addRating(data);
        setSubjects([]);
      })}>
      <TextField
        fullWidth
        size="small"
        variant={'outlined'}
        type="text"
        label="rating name"
        error={!!errors.name}
        helperText={errors?.name?.message}
        {...register('name', {
          required: 'field is required',
          minLength: { value: 3, message: 'min 3 symbols' },
          maxLength: { value: 15, message: 'max 15 symbols' },
        })}
      />
      <Divider flexItem sx={{ mb: 2, mt: 2 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: { xs: 'inherit', md: 'start' },
          flexDirection: { xs: 'column', md: 'row' },
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            minWidth: '250px',
          }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}>
            <TextField
              fullWidth
              size="small"
              variant={'outlined'}
              type="text"
              label={'subject name'}
              error={!!errors.subject}
              helperText={errors?.subject?.message}
              {...register('subject', {
                minLength: { value: 3, message: 'min 3 symbols' },
                maxLength: { value: 15, message: 'max 15 symbols' },
              })}
            />
            <IconButton
              onClick={() => {
                if (!errors.subject) {
                  addSubject(getValues('subject'));
                  setValue('subject', '');
                }
              }}
              sx={{ ml: 1 }}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            ml: 2,
            mr: 2,
            mb: { xs: 1, md: 0 },
            mt: { xs: 1, md: 0 },
          }}
        />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {subjects.map((s) => (
            <Chip key={s.id} label={s.name} onDelete={() => removeSubject(s.id)} />
          ))}
        </Box>
      </Box>
      <Divider flexItem sx={{ mb: 2, mt: 2 }} />
      <Button variant="contained" type="submit" sx={{ alignSelf: { xs: 'inherit', md: 'end' } }}>
        <Typography marginTop="2px">create rating</Typography>
      </Button>
    </Paper>
  );
};
