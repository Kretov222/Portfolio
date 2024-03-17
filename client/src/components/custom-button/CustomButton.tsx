import { Button } from '@mui/material';

type CustomButtonProps = {
  color: 'success' | 'primary' | 'secondary';
  disabled?: boolean;
  children: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
};

export default function CustomButton({
  children,
  color,
  disabled,
  onClick,
  type,
}: CustomButtonProps) {
  return (
    <Button color={color} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </Button>
  );
}

// создать массив объектов из фигмы
// изучить таблицы матириал
//модалка с полями
