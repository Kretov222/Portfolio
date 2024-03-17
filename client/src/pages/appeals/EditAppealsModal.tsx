import {
  Button,
  Grid,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../slices/hooks';
import { clearCurrentAppeal } from '../../slices/data';
import { AddAppealType } from '../../types/dataTypes';
import { thunkEditData } from '../../slices/data/CreateAsyncThunk';
import React, {useEffect, useState } from 'react';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
// void dispatch(thunkEditComment({formData, id: selectedComment?.id}))
export const EditAppealsModal = () => {
  const dispatch = useAppDispatch();
  const currentAppeal = useAppSelector(
    (appeal) => appeal.dataSlice.currentAppeal
  );
  const [dis, setDisable] = useState(true);
  const [text, setText] = useState({
    authorName: currentAppeal?.authorName || '',
    description: currentAppeal?.description || '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (text.authorName.length < 3 || text.description.length < 5) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [text]);

  useEffect(() => {
    setText({
      authorName: currentAppeal?.authorName || '',
      description: currentAppeal?.description || '',
    });
  }, [currentAppeal]);

  return (
    <Modal
      open={!!currentAppeal}
      onClose={() => dispatch(clearCurrentAppeal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(
            new FormData(e.currentTarget)
          ) as AddAppealType;
          void dispatch(thunkEditData({ formData, id: currentAppeal?.id }));
        }}
      >
        <Grid
          container
          sx={style}
          justifyContent={'space-around'}
          position={'fixed'}
        >
          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            height={200}
          >
            <Typography fontWeight="bolder">Дата изменения</Typography>
            <Typography fontWeight="bolder">Автор</Typography>
            <Typography fontWeight="bolder">Тип обращения</Typography>
            <Typography fontWeight="bolder">Описание</Typography>
          </Grid>

          <Grid
            item
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            height={330}
          >
            <Typography>{new Date().toLocaleDateString()}</Typography>

            <TextField
              onChange={handleChange}
              name="authorName"
              value={text.authorName}
              label="Введите имя"
              size="small"
            ></TextField>
            <Select
              size="small"
              name="type"
              displayEmpty
              defaultValue={currentAppeal?.type}
            >
              <MenuItem value="">
                <em>Выберите тип</em>
              </MenuItem>
              <MenuItem value="Ошибка">Ошибка</MenuItem>
              <MenuItem value="Рекомендация">Рекомендация</MenuItem>
              <MenuItem value="Замечание">Замечание</MenuItem>
            </Select>
            <TextField
              onChange={handleChange}
              value={text.description}
              name="description"
              rows={5}
              multiline
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              size="small"
              variant="contained"
              disabled={dis}
            >
              Внести изменения
            </Button>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};
