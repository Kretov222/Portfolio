import { React, PropsWithChildren } from 'react';
import CustomButton from '../custom-button/CustomButton';
import { Box, Grid, Input, TableCell } from '@mui/material';
import { red } from '@mui/material/colors';

interface ModalProps {
  active: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
}

const Modal = ({
  active,
  onClose,
}: PropsWithChildren<ModalProps>): JSX.Element => {
  if (!active) {
    return null;
  }

  return (
    <div  className="modal" >
      <div className="modal_content">
        <div className="modal_header">
          <div className="modal_title"></div>
        </div>
        <div className="modal_body">
        <Box
          sx={{
            backgroundColor: red[200],
            height: 400,
            display: 'flex',
          }}
        >
          <Grid item style={{ display: 'flex' }}>
            <TableCell>Дата</TableCell>
            <TableCell>Автор</TableCell>
            <TableCell>Тип обращения</TableCell>
            <TableCell>Описание</TableCell>
          </Grid>
          <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
            <Input placeholder="123"></Input>
            <Input placeholder="123"></Input>
            <Input placeholder="123"></Input>
            <Input placeholder="123"></Input>
          </Grid>
        </Box>

          <CustomButton color="success">Отправить</CustomButton>
          <CustomButton color="primary" onClick={onClose}>
            закрыть
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;



{/* <Modal
        active={showModal}
        onClose={closeModal}
        onSubmit={() => console.log}
      >
        
      </Modal> */}


      // const [showModal, setShowModal] = useState(false);

      // const closeModal = () => {
      //   setShowModal(false);
      // };