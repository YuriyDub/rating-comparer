import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import { AddItemPopup } from './AddItemPopup';
import { StudentForm } from './StudentForm';

export const RatingTable = ({ rating, id, ...props }) => {
  const subjects = rating.subjects;

  return (
    <>
      {rating ? (
        <Box>
          <TableContainer component={Paper} {...props}>
            <Typography variant="h5" sx={{ fontWeight: 500, p: 2, flex: '1 1 100%' }}>
              {rating.name}
            </Typography>
            <Divider />
            <Table>
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
                {rating.students.map((r) => {
                  return (
                    <TableRow>
                      <TableCell>{r.name + ' ' + r.surname}</TableCell>
                      {r.subjects.map((s) => {
                        return (
                          <TableCell key={s.id} align="center">
                            {s.mark}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <StudentForm addStudent={props.addStudent} id={id} />
          </Box>
        </Box>
      ) : null}
    </>
  );
};
