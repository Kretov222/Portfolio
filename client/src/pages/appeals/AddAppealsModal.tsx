import {
  Button,
  Grid,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { AddDataType } from '../../types/dataTypes';
import { thunkAddData } from '../../slices/data/CreateAsyncThunk';
import { useAppDispatch } from '../../slices/hooks';

type AddAppealsModalPropsType = {
  open: boolean;
  onClose: () => void;
};

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

export const AddAppealsModal = ({
  open,
  onClose,
}: AddAppealsModalPropsType) => {
  const dispatch = useAppDispatch();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newdata = Object.fromEntries(
            new FormData(e.currentTarget)
          ) as AddDataType;
          void dispatch(thunkAddData(newdata));
          onClose();
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
            <Typography fontWeight="bolder">Дата</Typography>
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

            <TextField name='authorName' label="Введите имя" size="small"></TextField>
            <Select size="small" name="type" displayEmpty>
              <MenuItem value="">
                <em>Выберите тип</em>
              </MenuItem>
              <MenuItem value="Ошибка">Ошибка</MenuItem>
              <MenuItem value="Рекомендация">Рекомендация</MenuItem>
              <MenuItem value="Замечание">Замечание</MenuItem>
            </Select>
            <TextField name="description" rows={5} multiline />
          </Grid>
          <Grid item>
            <Button type='submit' size="small" variant="contained">
              Добавить
            </Button>
            <Button
              onClick={onClose}
              size="small"
              variant="contained"
              color="error"
            >
              Закрыть
            </Button>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};
