import { ReactNode, MouseEventHandler } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>,
  type?: 'button' | 'submit' | 'reset',
  link?: boolean,
}
const Button = ({
  children, type, link, onClick,
}: ButtonProps) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {link
      ? (
        <div className={styles.button}>
          {children}
        </div>
      )
      : (
    // eslint-disable-next-line react/button-has-type
        <button type={type} className={styles.button} onClick={onClick}>
          {children}
        </button>
      )}
  </>
);

Button.defaultProps = {
  type: 'button',
  link: false,
  onClick: null,
};

export default Button;
