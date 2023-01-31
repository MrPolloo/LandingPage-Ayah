import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../styles/BaseButton.module.css';

function BaseButton(props) {
  const {
    variant = 'primary',
    type = 'submit',
    active,
    children,
    disabled = false,
  } = props;

  return (
    <Button
      type={type}
      active={active}
      className={[
        [styles.btn],
        [variant === 'primary' && styles.primary],
        [variant === 'secondary' && styles.light],
        [variant === 'outlined' && styles.outlined],
        [variant === 'outlinednavbar' && styles.outlinednavbar],
        [variant === 'lamar' && styles.lamar],
        [active && styles.primary],
        'btn-check:active',
      ]}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
export default BaseButton;
