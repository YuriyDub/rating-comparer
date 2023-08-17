import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState: { list: [], status: null, error: null },
  reducers: {
    addRating(state, action) {
      state.list.push({
        id: v1(),
        name: action.payload.name,
        subjects: action.payload.subjects,
        students: [],
      });
    },
    removeRating(state, action) {
      state.list = state.list.filter((l) => l.id !== action.payload.id);
    },
    renameRating(state, action) {
      state.list = state.list.map((l) => {
        if (l.id === action.payload.id) {
          return { ...l, name: action.payload.name };
        }
        return l;
      });
    },
    addStudent(state, action) {
      const currentRating = state.list.find((e) => e.id === action.payload.id);
      const subjects = [];

      for (let i = 0; i < currentRating.subjects.length; i++) {
        const newObj = { id: v1(), name: currentRating.subjects[i], mark: 0 };
        subjects.push(newObj);
      }

      currentRating.students.push({
        id: v1(),
        name: action.payload.name,
        surname: action.payload.surname,
        subjects: subjects,
      });
    },
    removeStudent(state, action) {
      const currentRating = state.list.find((r) => r.id === action.payload.id);

      currentRating.students = currentRating.students.filter(
        (s) => s.id !== action.payload.studentId,
      );
    },
    changeStudentName(state, action) {
      const currentRating = state.list.find((r) => r.id === action.payload.id);
      const currentStudent = currentRating.students.find((s) => s.id === action.payload.studentId);
      console.log(currentStudent.name);

      currentStudent.name = action.payload.name;
    },
    changeStudentSurname(state, action) {
      const currentRating = state.list.find((r) => r.id === action.payload.id);
      const currentStudent = currentRating.students.find((s) => s.id === action.payload.studentId);

      currentStudent.surname = action.payload.surname;
    },
    addSubject(state, action) {},
    removeSubject(state, action) {},
    renameSubject(state, action) {},
    changeMark(state, action) {},
    changeCoefficient(state, action) {},
  },
});

export const {
  setRating,
  addRating,
  removeRating,
  renameRating,
  addStudent,
  removeStudent,
  changeStudentName,
  changeStudentSurname,
  addSubject,
  removeSubject,
  renameSubject,
  changeMark,
  changeCoefficient,
} = ratingsSlice.actions;

export default ratingsSlice.reducer;
