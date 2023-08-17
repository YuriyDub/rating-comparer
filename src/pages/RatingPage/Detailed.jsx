import React from 'react';
import { RatingTable } from '../../components/RatingTable';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  addStudent,
  removeStudent,
  changeStudentName,
  changeStudentSurname,
} from '../../store/slices/ratingsSlice';

export const Detailed = () => {
  const { id } = useParams('id');
  const { list } = useSelector((state) => state.ratings);

  const dispatch = useDispatch();

  return (
    <Box sx={{ mt: 15 }}>
      {list ? (
        <RatingTable
          rating={list.find((r) => r.id === id)}
          id={id}
          addStudentHandler={(p) => {
            dispatch(addStudent(p));
          }}
          removeStudentHandler={(p) => {
            dispatch(removeStudent(p));
          }}
          changeStudentNameHandler={(p) => {
            dispatch(changeStudentName(p));
          }}
          changeStudentSurnameHandler={(p) => {
            dispatch(changeStudentSurname(p));
          }}
        />
      ) : null}
    </Box>
  );
};
