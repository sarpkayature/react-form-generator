import { CSSProperties } from "react";

export interface FormProps {
  id?: number;
  rows: any[];
  validationSchema?: object | any;
  defaultValues?: object | any;
  onSubmit: (values: any) => void;
}

export interface IFormRows {
  name: string;
  label: string;
  type: string;
  options?: any;
  key: string | number;
  style?: CSSProperties | undefined | any;
  size?: "small" | "medium" | undefined;
  variant?: "standard" | "outlined" | "filled" | undefined;
  defaultValue?: any;
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
  margin?: "dense" | "none" | "normal";
  closeBtnType?: "submit" | "reset" | "button" | undefined;
  onClick?: (e: any) => void;
  validation?: any;
  defaultChecked?: boolean;
  inputProps?: {
    className?: string;
    style?: CSSProperties | undefined | any;
    color?: "primary" | "secondary" | "default" | undefined | any;
    variant?:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "subtitle1"
      | "subtitle2"
      | "body1"
      | "body2"
      | "caption"
      | "button"
      | "overline"
      | undefined
      | any;
  };
  gridSize: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  color?:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | undefined;
}
