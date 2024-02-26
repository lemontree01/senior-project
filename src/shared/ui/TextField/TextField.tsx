import { InputHTMLAttributes } from "react";
import styles from './TextField.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  header?: string;
  width?: string;
}

export const TextField = (props: TextFieldProps) => {
  const {
    header,
    width,
    ...otherProps
  } = props;
  return (
    <div className={styles.parent} style={{
      width
    }}>
      <div className={styles.header}>{header}</div>
      <input className={styles.input} style={{
        width
      }} {...otherProps}/>
    </div>
  )
}