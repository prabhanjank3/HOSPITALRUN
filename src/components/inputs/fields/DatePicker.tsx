import TextField from "@mui/material/TextField";
import React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

interface DateFieldProps {
  name: string;
  label: string;
  type: string;
  inputFormat: string;
  value: any;
  defaultValue: any;
  extraAttributes: any;
  onChange: any;
  meta: any;
}
const DateFieldInput: React.FC<DateFieldProps> = ({
  name,
  value,
  label,
  inputFormat,
  defaultValue,
  extraAttributes,
  onChange,
  meta
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat={inputFormat}
        value={value}
        {...extraAttributes}
        onChange={(e: any) => {
          const selectedDate = dayjs(new Date(e.$d)).format(inputFormat);
          onChange(name, selectedDate);
        }}
        renderInput={(params) => <TextField {...params} 
        fullWidth 
        error={(meta)?!meta.isValid:false}
        helperText={(meta && meta?.messages?.length > 0)?meta.messages[0]:''}
        />}
      />
    </LocalizationProvider>
  );
};
export default DateFieldInput;
