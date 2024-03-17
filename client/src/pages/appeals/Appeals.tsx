import { Box, Button, Container, Grid } from '@mui/material';
import CustomButton from '../../components/custom-button/CustomButton.js';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { blue } from '@mui/material/colors';
// import { useState } from 'react';

import { useState } from 'react';
import { AddAppealsModal } from './AddAppealsModal.js';
import { useAppDispatch, useAppSelector } from '../../slices/hooks.js';
import { EditAppealsModal } from './EditAppealsModal.js';
import { thunkDeleteData } from '../../slices/data/CreateAsyncThunk.js';
import { setCurrentAppeal, sort } from '../../slices/data/index.js';
import { FilterIcon } from '../../components/icons/FilterIcon.js';

export default function Appeals() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.dataSlice.data);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddOpen = () => {
    setShowAddModal(true);
  };

  const handleAddClose = () => {
    setShowAddModal(false);
  };

  return (
    <Container>
      <Grid container flexDirection={'column'}>
        <Grid item>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CustomButton color="primary" onClick={handleAddOpen}>
              + создать обращение
            </CustomButton>
          </Box>
          <Grid item>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: blue[900],
                      justifyContent: 'space-between',
                    }}
                  >
                    <TableCell sx={{ color: 'white' }}>
                      Дата
                      <button
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                        }}
                        onClick={() => void dispatch(sort('date'))}
                      >
                        <FilterIcon />
                      </button>
                    </TableCell>
                    <TableCell sx={{ color: 'white' }}>
                      Автор{' '}
                      <button
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                        }}
                      >
                        <FilterIcon />
                      </button>
                    </TableCell>
                    <TableCell sx={{ color: 'white' }}>Описание</TableCell>
                    <TableCell sx={{ color: 'white' }}>Тип</TableCell>
                    <TableCell sx={{ color: 'white' }}>
                      Статус{' '}
                      <button
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                        }}
                        onClick={() => void dispatch(sort('type'))}
                      >
                        <FilterIcon />
                      </button>
                    </TableCell>
                    <TableCell sx={{ color: 'white' }}>Действия</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        {new Date(row.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{row.authorName}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => dispatch(thunkDeleteData(row.id))}
                          size="small"
                          variant="contained"
                          color="success"
                        >
                          Удалить
                        </Button>
                        <Button
                          onClick={() => dispatch(setCurrentAppeal(row))}
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          Изменить
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <AddAppealsModal open={showAddModal} onClose={handleAddClose} />
      <EditAppealsModal />
    </Container>
  );
}
