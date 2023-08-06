import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export const EditedTitle = ({ title, edit, component }) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  return (
    <Box
      sx={{ cursor: 'text' }}
      component="form"
      onSubmit={handleSubmit((data) => {
        edit(data.name);
        reset();
        setIsEdit(false);
      })}>
      {isEdit ? (
        <Box
          sx={{ display: 'flex', p: 1 }}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <TextField
            onBlur={() => {
              setIsEdit(false);
            }}
            autoFocus
            size="small"
            type="text"
            variant="standard"
            defaultValue={title}
            error={!!errors.name}
            helperText={errors?.name?.message}
            {...register('name', {
              required: 'field is required',
              minLength: { value: 3, message: 'min 3 symbols' },
              maxLength: { value: 15, message: 'max 15 symbols' },
            })}
          />
        </Box>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          onDoubleClick={(e) => {
            setIsEdit(true);
          }}>
          {component}
        </div>
      )}
    </Box>
  );
};
