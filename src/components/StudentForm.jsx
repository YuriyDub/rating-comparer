import React from 'react';
import { AddItemPopup } from './AddItemPopup';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export const StudentForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const addStudent = (student) => {
    props.addStudentHandler({ name: student.name, surname: student.surname, id: props.id });
  };

  return (
    <AddItemPopup>
      <Box
        component="form"
        onSubmit={handleSubmit((data) => {
          addStudent(data);
          reset();
        })}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 1,
        }}>
        <TextField
          fullWidth
          size="small"
          variant={'outlined'}
          type="text"
          label="Name"
          error={!!errors.name}
          helperText={errors?.name?.message}
          {...register('name', {
            required: 'field is required',
            minLength: { value: 2, message: 'min 2 symbols' },
            maxLength: { value: 15, message: 'max 15 symbols' },
          })}
        />
        <TextField
          fullWidth
          size="small"
          variant={'outlined'}
          type="text"
          label="Surname"
          error={!!errors.surname}
          helperText={errors?.surname?.message}
          {...register('surname', {
            required: 'field is required',
            minLength: { value: 2, message: 'min 2 symbols' },
            maxLength: { value: 15, message: 'max 15 symbols' },
          })}
        />
        <Button variant="contained" type="submit" sx={{ width: { xs: '100%', sm: 'inherit' } }}>
          OK
        </Button>
      </Box>
    </AddItemPopup>
  );
};
