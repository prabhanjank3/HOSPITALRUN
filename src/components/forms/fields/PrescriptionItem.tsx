import {Button} from '@mui/material';
import {AiFillFileAdd} from 'react-icons/ai'
const prescriptionFields = [
    {
      fields: [
        {
          name: "medicine",
          label: "Add New",
          type: "select",
          options: [
            { label: "Paracetamol-20MG", id: "Paracetamol-20MG" },
            { label: "Nice-10MG", id: "Nice-10MG" }
          ],
          extraAttributes: {
            fullWidth:true,
            size:'small'
          },
          media: {
            xl:2,
            lg: 2,
            md: 6,
            sm: 12
          }
        },
        {
            name: "dose",
            label: "Dose",
            extraAttributes: {
              fullWidth:true,
              size:'small'
            },
            media: {
                xl:2,
                lg: 2,
                md: 6,
                sm: 12
              }
        },
        {
          name: "duration",
          label: "Duration",
          extraAttributes: {
            fullWidth:true,
            size:'small'
          },
          media: {
              xl:2,
              lg: 2,
              md: 6,
              sm: 12
            }
        },
        {
          name: "frequency",
          label: "Frequency",
          extraAttributes: {
              size:'small'
            },
          media:  {
              xl:2,
              lg: 2,
              md: 6,
              sm: 12
          }
        },
        {
          name: "qty",
          label: "Qty",
          extraAttributes: {
              size:'small'
            },
          media:  {
              xl:1,
              lg: 1,
              md: 6,
              sm: 12
          }
        },
        {
            name: "comment",
            label: "Comment",
            extraAttributes: {
                multiline:true,
                size:'small'
              },
            media:  {
                xl:2,
                lg: 2,
                md: 6,
                sm: 12
            }
        },
        {
            type:'submit',
            renderSubmitField:(ref:any) => {return <Button style={{width:'100%'}} ref={ref} variant='contained'>Add</Button>},
            extraAttributes: {
              fullWidth:true,
              size:'small'
            },
            media:  {
                xl:1,
                lg: 1,
                md: 6,
                sm: 12
            }
        }
      ]
    },
  ];
  
  export default prescriptionFields;
  