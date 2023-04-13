import TextField from "@mui/material/TextField";
import React from "react";
import _ from 'lodash'

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  value: any;
  defaultValue: any;
  extraAttributes: any;
  meta:any,
  onChange: (a:string,b:any) => void;
}
const TextFieldInput: React.FC<InputFieldProps> = ({
  name,
  value,
  label,
  defaultValue,
  onChange,
  extraAttributes,
  meta
}) => {
 
  return (
    <TextField
      name={name}
      defaultValue={defaultValue}
      value={value}
      label={label}
      error={(meta)?!meta.isValid:false}
      helperText={(meta && meta?.messages?.length > 0)?meta.messages[0]:''}
      fullWidth
      {...extraAttributes}
      onChange={(event: any) => {
        onChange(name, event.target.value);
      }}
    />
  );
};
export default TextFieldInput;
