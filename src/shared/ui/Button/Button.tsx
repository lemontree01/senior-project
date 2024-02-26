import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from './Button.module.scss';
import { classNames } from "~/shared/lib/classNames";

export type ButtonVariant = 'normal' | 'outlined';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'normal',
    className,
    ...otherProps
  } = props;

  return (
    <button className={classNames(className, styles[variant])} {...otherProps}>{children}</button>
  )
}