import {Button} from '@mui/material';

const newAppointmentFields = [
    {
      fields: [
        {
          name: "patientid",
          label: "Patient Name",
          validators:[{
            validate:(value:any, fieldName:string) => {
              return (value)?true:false},
            message:'Please select the patient'
          }],
          type:'select',
          options:[],
          media: {
            lg: 6,
            md: 6,
            sm: 12
          }
        },
        {
          name: "opdid",
          label: "Doctor Name",
          validators:[{
            validate:(value:any, fieldName:string) => {
              return (value)?true:false},
            message:'Please select the OPD'
          }],
          type:'select',
          options:[],
          media: {
            lg: 6,
            md: 6,
            sm: 12
          }
        },
      ]
    },
    {
      fields: [
        {
          name: "date",
          label: "Date",
          type: "date",
          validators:[{
            validate:(value:any, fieldName:string) => {
              return (value)?true:false},
            message:'Please select the date'
          }],
          inputFormat: "YYYY-MM-DD",
          media: {
            lg: 6,
            md: 6,
            sm: 12
          }
        },
        {
          name: "slot",
          label: "Slot",
          type: "select",
          defaultValue:-1,
          options:[],
          media: {
            lg: 6,
            md: 6,
            sm: 12
          }
        }
      ]
    },
    {
      fields: [
        {
          name: "reason",
          label: "Reason",
          media: {
            lg: 12,
            md: 12,
            sm: 12
          },
          extraAttributes: {
            multiline: true,
            rows: 3
          }
        }
      ]
    },
    {
      noGrid:true,
      style:{
        textAlign:'center'
      },
      fields: [
        {
          type:'submit',
          renderSubmitField: (ref: React.MutableRefObject<HTMLButtonElement> | null | undefined) => {return <Button ref={ref} variant="contained" sx={{textAlign:'center', mr:2}}>Submit</Button>},
          media: {
            xl:6,
            lg: 6,
            md: 6,
            sm: 12
          }
        },
        {
          type:'cancel',
          renderCancelField: (ref: React.MutableRefObject<HTMLButtonElement> | null | undefined) => {return <Button ref={ref} variant="contained" color='error' sx={{textAlign:'center'}}>cancel</Button>},
          media: {
            xl:6,
            lg: 6,
            md: 6,
            sm: 12
          }
        }
      ]
    }
  ];
  
  export default newAppointmentFields;
  