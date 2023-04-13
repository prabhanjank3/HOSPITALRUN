import { Edit, Delete } from "@mui/icons-material";
import ActionItem from "../../../../../models/actionItem";

const CrudActions: ActionItem[] = [
  {
    name: "Edit",
    icon: <Edit />,
    onClick: (event, rowData) => {
      console.log("Edit Clicked");
    }
  },
  {
    name: "Delete",
    icon: <Delete />,
    onClick: (event, rowData) => {
      console.log("Delete Clicked");
    }
  }
];
export default CrudActions;
