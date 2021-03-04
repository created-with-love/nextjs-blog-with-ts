import React from 'react';
import { Button } from '../styles/common';

interface ButtonProps {
  text: string;
  onClick: Function;
  type?: string;
  disabled?: boolean;
}

const ButtonEl = ({
  text,
  onClick,
  type,
  disabled = false,
}: ButtonProps): JSX.Element => {
  return (
    <Button onClick={onClick} type={type || 'button'} disabled={disabled}>
      {text}
    </Button>
  );
};

export default ButtonEl;
