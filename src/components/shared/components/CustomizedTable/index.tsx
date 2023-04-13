import MaterialTable, { MTableToolbar, Column } from "material-table";
import ActionMenu from "../actionMenu";
import ActionItem from "../../../../models/actionItem";
import { Typography,Button } from "@mui/material";

const defaultActions:any[] = [
  {
    hidden: true
  }
];
const defaultComponents = {};

interface TableProps{
  label:string,
  columns:Column<Object>[],
  data:Object[],
  actions:any[],
  components:any,
  actionMenu:ActionItem[],
  options:any,
  rest:any[]
}

const ToolBar =  (props:any) => {
  return <div>
    <div style={{ 
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      maxHeight:'60px'
      }}>
      <MTableToolbar {...props} />
      <div style={{ display:'flex',height: "fit-content", marginLeft:'auto', paddingRight:'16px' }}>
      {props.foo}
      </div>
      </div>
      <div
      style={{
        float:'right'
      }}
    > 
    </div>
  </div>
}

export default function ActionOverriding({
  label,
  columns,
  data,
  actions,
  components = defaultComponents,
  actionMenu,
  options,
  ...rest
}:TableProps) {
  
  let dynamicProps:any = { components:{}};
  if(components?.RightToolbar)
  {
    dynamicProps.components['Toolbar'] = (props:any) => (
      <ToolBar {...props} foo={components.RightToolbar}   />
    )
  }
  if(actionMenu)
  {
    dynamicProps.actions = defaultActions;
    dynamicProps.components['Action'] = (props:any) => (
      <ActionMenu menuItems={actionMenu} data={props.data} />
    )
  }
  if(actions)
  {
    dynamicProps.actions = actions
  }
  dynamicProps.components = {...components, ...dynamicProps.components}
  return (
    <MaterialTable
      title={<Typography fontFamily={'DMSansRegular'} fontSize='19px' fontWeight={500} lineHeight='20px' color={'rgb(27, 37, 89)'}>{label}</Typography>}
      columns={columns}
      data={data}
      {...dynamicProps}
      options={{ 
        search: false, 
        actionsColumnIndex: -1,
        cellStyle: { fontSize:15, color:'rgb(27, 37, 89)', fontWeight:400, fontFamily:'DMSansRegular', padding:'14px 14px'},
        headerStyle:{color: 'rgb(160, 174, 192)', fontWeight:700, fontFamily:'DM Sans', padding:'14px 14px'}, 
        ...options 
      }}
      {...rest}
    />
  );
}
