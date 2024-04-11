import { InputHTMLAttributes } from "react";
import styles from "./TextField.module.scss";
import ReactInputMask from "react-input-mask";
import { Radio } from "@mui/material";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  header?: string;
  width?: string;
  isDate?: boolean;
  onMale?: any;
  onFemale?: any;
  isGender?: boolean;
  isRole?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  const {
    header,
    width,
    isDate,
    isGender,
    onChange,
    value,
    onMale,
    onFemale,
    isRole,
    ...otherProps
  } = props;

  if (isRole) {
    return (
      <div
        className={styles.parent}
        style={{
          width,
        }}
      >
        <div className={styles.header}>{header}</div>
        <Radio checked={value === "policeman"} onClick={onMale!} />
        Policeman <br />
        <Radio checked={value === "admin"} onClick={onFemale} /> Admin <br />
      </div>
    );
  }

  if (isGender) {
    return (
      <div
        className={styles.parent}
        style={{
          width,
        }}
      >
        <div className={styles.header}>{header}</div>
        <Radio checked={value === "male"} onClick={onMale!} />
        Male <br />
        <Radio checked={value === "female"} onClick={onFemale} /> Female <br />
      </div>
    );
  }
  if (isDate) {
    return (
      <div
        className={styles.parent}
        style={{
          width,
        }}
      >
        <div className={styles.header}>{header}</div>
        <ReactInputMask
          mask="9999-99-99"
          placeholder="YYYY-MM-DD"
          className={styles.input}
          value={value}
          onChange={onChange}
          style={{
            width,
          }}
          {...otherProps}
        />
      </div>
    );
  }
  return (
    <div
      className={styles.parent}
      style={{
        width,
      }}
    >
      <div className={styles.header}>{header}</div>
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        style={{
          width,
        }}
        {...otherProps}
      />
    </div>
  );
};
