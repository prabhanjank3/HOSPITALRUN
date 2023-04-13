import TextFieldInput from "../inputs/fields/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DateFieldInput from "../inputs/fields/DatePicker";
import TimeFieldInput from "../inputs/fields/TimeField";
import AutocompleteInputField from "../inputs/fields/AutoComplete";
import React, { useEffect, useState, useRef } from "react";
import { createDefaultValuesFromFieldSet } from "../shared/helpers/helpers";
import { Card } from "@mui/material";

const renderField = (field: any, value:any, handleChange: (a:string, b:any) => void, refs:any, fieldErrors:any) => {

  if(field.type === 'submit'){
    return field.renderSubmitField(refs.submitRef)
  }
  if(field.type === 'cancel'){
    return field.renderCancelField(refs.cancelRef) 
  }
  if (field.type === "date") {
    return (<DateFieldInput {...field} value={value} onChange={handleChange} meta={fieldErrors[field.name]} />);
  }
  if (field.type === "time") {
    return (<TimeFieldInput {...field} value={value} onChange={handleChange} meta={fieldErrors[field.name]} />);
  }
  if (field.type === "select") {
    return <AutocompleteInputField
          {...field}
          value={value}
          onChange={handleChange}
          meta={fieldErrors[field.name]}
        />
  }
  return (<TextFieldInput {...field} value={value} onChange={handleChange} meta={fieldErrors[field.name]} />);
};

const renderRow = (row:any, value:any, handleChange: (a:string, b:any) => void, refs:any, fieldErrors:any) => {

  const fieldsLayout = (row?.noGrid)?<Box sx={{...row?.style}}>
    {row.fields.map((field:any) =>
       renderField(field, value[field.name], handleChange, refs, fieldErrors)
    )}
    </Box>:<Grid container spacing={2} marginBottom={2} sx={{...row?.style}}>
    {row.fields.map((field:any) =>
      <Grid item {...field.media}>
        {renderField(field, value[field.name], handleChange, refs, fieldErrors)}
      </Grid>
    )}
    </Grid>

  return fieldsLayout
};


export default React.forwardRef(({
  fieldSet,
  handleSubmit,
  handleCancel,
  renderActionButtons,
  trackValues
}: {
  fieldSet: any[];
  handleSubmit: (a:any) => void;
  handleCancel?: (a:any) => void;
  renderActionButtons?: any,
  trackValues?: (a:any) => any | null
},customRef:any) => {

  const defaultValues = createDefaultValuesFromFieldSet(fieldSet);
  const [values, setValues] = useState(defaultValues);
  
  const submitRef:React.MutableRefObject<HTMLButtonElement | null | undefined> = useRef();
  const cancelRef:React.MutableRefObject<HTMLButtonElement | null | undefined> = useRef();

  const refs = {submitRef, cancelRef};

  const [formFields, setFormFields] = useState(fieldSet);
  const [fieldErrors, setFieldErrors] = useState<any>({});

  const validate =  (newData:any, fieldName:any) =>  {

    let messages = [];
    let isValid = true;

     formFields.forEach( (row:any, rindex:any) => {
      const temp = row.fields.find((v:any) => v.name === fieldName)
      if(temp)
      {
        if (temp.validators) {
          messages = temp.validators
              .map((v:any) => v.validate(newData, fieldName) ? '' : v.message)
              .filter((m:any) => m.length > 0)

          if(messages.length > 0)
          {
            isValid = false;
            setFieldErrors({
              ...fieldErrors,
              [fieldName] : {
                isValid:false,
                messages:messages
              }
            })
            
          }
          else
          {
            setFieldErrors({
              ...fieldErrors,
              [fieldName] : {
                isValid:true,
                messages:[]
              }
            })
            
          }
        }
      }
     
    })
    
    return isValid;
}
 const validateAll = () => {
  let isAllValid :any =true;
  for(let val in values)
  {
    isAllValid = isAllValid && validate(values[val], val); 
  }
  return isAllValid;
 } 
  const handleChange: (a:string, b:any) => void =  (name: string, value: any) => {
    setValues({ ...values, [name]: value });
    validate(value, name)
  };

  const onSubmit =  () => {
    if(validateAll())
    {
      handleSubmit(values);
      setValues(defaultValues)
    }
  };

    useEffect(() => {
      if(trackValues)
      {
        trackValues(values)
      }
      if(submitRef && submitRef?.current)
      {
        submitRef.current.addEventListener('click',onSubmit, false)
          return () => 
          {
              if(submitRef?.current)
              submitRef.current.removeEventListener('click',onSubmit, false)
          }
      }
    },[values]);
    useEffect(() => {
      if(handleCancel && cancelRef?.current)
      {
        cancelRef.current.addEventListener('click',handleCancel, false)
          return () => 
          {
              if(submitRef?.current)
              submitRef.current.removeEventListener('click',handleCancel, false)
          } 
      }
    },[])

  return (
    <>
        {[formFields.map((row) => renderRow(row, values, handleChange, refs, fieldErrors))]}
        {/* {(renderActionButtons)?renderActionButtons:<></>} */}
    </>
  );
});
