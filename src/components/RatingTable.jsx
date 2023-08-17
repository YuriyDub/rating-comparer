import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Box, Button, Divider, IconButton, TextField, Typography } from '@mui/material';
import { AddItemPopup } from './AddItemPopup';
import { StudentForm } from './StudentForm';
import { EditableSpan } from './EditableSpan';

export const RatingTable = ({
  rating,
  id,
  addStudentHandler,
  removeStudentHandler,
  changeStudentNameHandler,
  changeStudentSurnameHandler,
  ...props
}) => {
  const subjects = rating.subjects;

  return (
    <>
      {rating ? (
        <Box sx={{ width: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TableContainer component={Paper} sx={{ width: 'auto' }} {...props}>
            <Typography variant="h5" sx={{ fontWeight: 500, p: 2 }}>
              {rating.name}
            </Typography>
            <Divider />
            <Table sx={{ width: 'auto' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Subjects{' '}
                    <AddItemPopup>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', sm: 'row' },
                          gap: 1,
                        }}>
                        <TextField fullWidth size="small" variant={'outlined'} type="text" />
                        <Button variant="contained" sx={{ width: { xs: '100%', sm: 'inherit' } }}>
                          OK
                        </Button>
                      </Box>
                    </AddItemPopup>
                  </TableCell>
                  {subjects.map((s) => (
                    <TableCell key={s.id} align="center">
                      {s.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rating.students.map((student) => {
                  return (
                    <TableRow key={student.id}>
                      <TableCell
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Box sx={{ display: 'flex', gap: 1, overflow: 'hidden' }}>
                          <EditableSpan
                            title={student.name}
                            edit={(name) =>
                              changeStudentNameHandler({ name, id, studentId: student.id })
                            }
                            value={student.name}
                            component={<Typography component={'span'}>{student.name}</Typography>}
                          />
                          <EditableSpan
                            title={student.surname}
                            edit={(surname) =>
                              changeStudentSurnameHandler({ surname, id, studentId: student.id })
                            }
                            value={student.surname}
                            component={
                              <Typography component={'span'}>{student.surname}</Typography>
                            }
                          />
                        </Box>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            removeStudentHandler({ id, studentId: student.id });
                          }}
                          size="small"
                          sx={{
                            transition: '0.1s ease-in-out',
                          }}>
                          <PersonRemoveIcon fontSize="inherit" />
                        </IconButton>
                      </TableCell>
                      {student.subjects.map((subject) => {
                        return (
                          <TableCell key={subject.id} align="center">
                            {subject.mark}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <StudentForm addStudentHandler={addStudentHandler} id={id} />
          </Box>
        </Box>
      ) : null}
    </>
  );
};
