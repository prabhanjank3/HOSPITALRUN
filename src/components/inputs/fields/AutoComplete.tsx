import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface OptionProps {
  label: string;
  id: any;
}
interface AutoCompleteFieldProps {
  name: string;
  label: string;
  type: string;
  options: OptionProps[];
  value: any;
  defaultValue: any;
  extraAttributes: any;
  onChange: any;
  meta:any
}
const AutocompleteInputField: React.FC<AutoCompleteFieldProps> = ({
  name,
  label,
  type,
  options,
  value,
  defaultValue,
  extraAttributes,
  onChange,
  meta
}) => {
  
  return (
    <Autocomplete
      value={(options?options:[]).filter((option) => option.id === value)[0]?.label || ""}
      onChange={(event: any, newValue: OptionProps | null) => {
        onChange(name, newValue?.id);
      }}
      defaultValue={
        (options?options:[]).filter((option) => option.id === defaultValue)[0]?.label || ""
      }
      id="controllable-states-demo"
      options={options}
      {...extraAttributes}
      sx={{width:'100%'}}
      renderInput={(params) => (
        <TextField {...params} 
        label={label} 
        fullWidth 
        error={(meta)?!meta.isValid:false}
        helperText={(meta && meta?.messages?.length > 0)?meta.messages[0]:''}  
        />
      )}
    />
  );
};

export default AutocompleteInputField;
