import { Button } from "@mui/material"
import {emailChecker} from '../Validator';
const loginFields = [
    {
      fields: [
        {
          name: "role",
          label: "Select Role",
          validators:[{
            validate:(value:any, fieldName:string) => {
              return (value)?true:false},
            message:'Please select the role'
          }],
          type: "select",
          options: [
            { label: "Doctor", id: "DOCTOR" },
            { label: "Patient", id: "PATIENT" }
          ],
          media: {
            lg: 12,
            md: 12,
            sm: 12
          }
        }
      ]
    },
    {
      fields: [
        {
            name: "email",
            label: "Email",
            validators:[{
              validate:(value:any, fieldName:string) => {
                return emailChecker(value)},
              message:'Value must be in ******@gmail.com'
            },
            {
              validate:(value:any, fieldName:string) => {
                return value.length !== 0},
              message:'This field is required'
            }
          ],
            media: {
              lg: 12,
              md: 12,
              sm: 12
            }
          },
      ]
    },
    {
      fields: [
        {
          name: "password",
          label: "Password",
          media: {
            lg: 12,
            md: 12,
            sm: 12
          },
          extraAttributes: {
            type:'password'
          }
        }
      ]
    },
    {
      fields: [
        {
          type:'submit',
          renderSubmitField: (ref: React.MutableRefObject<HTMLButtonElement> | null | undefined) => {return <Button ref={ref} variant="contained" sx={{textAlign:'center', width:'100%'}}>Sign In</Button>},
          media: {
            lg: 12,
            md: 12,
            sm: 12
          },
          extraAttributes: {
            
          }
        }
      ]
    }
  ];
  
  export default loginFields;
  