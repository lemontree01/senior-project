import { InputHTMLAttributes } from "react";
import styles from './TextField.module.scss';
import ReactInputMask from "react-input-mask";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  header?: string;
  width?: string;
  isDate?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  const {
    header,
    width,
    isDate,
    ...otherProps
  } = props;
  if(isDate) {
    return (
      <div className={styles.parent} style={{
        width
      }}>
        <div className={styles.header}>{header}</div>
        <ReactInputMask mask="9999-99-99" placeholder="YYYY-MM-DD" className={styles.input} style={{
        width
      }} {...otherProps}/>
       
      </div>
      
    )
  }
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