import { Box, Input } from '@mui/material';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export const EditableSpan = ({ title, edit, component }) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    trigger,
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
        <Input
          sx={{ width: 'auto' }}
          minLength
          onClick={(e) => {
            e.stopPropagation();
          }}
          onBlurCapture={async () => {
            setIsEdit(false);
            await trigger('username');
          }}
          size="small"
          type="text"
          variant="standard"
          defaultValue={title}
          error={!!errors.name}
          autoFocus
          {...register('name', {
            required: 'field is required',
            minLength: { value: 2, message: 'min 2 symbols' },
            maxLength: { value: 15, message: 'max 15 symbols' },
          })}
        />
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
