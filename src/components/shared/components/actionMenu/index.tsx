import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ActionItem from "../../../../models/actionItem";

export default function ActionMenu({ data, menuItems }:{data:Object, menuItems:ActionItem[]}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((action) => {
          return (
            <Item action={action} rowData={data} handleClose={handleClose} />
          );
        })}
      </Menu>
    </div>
  );
}
const Item = ({ action, rowData, handleClose }:{action:ActionItem, rowData:Object, handleClose:()=> void}) => {
  return (
    <MenuItem
      onClick={(e) => {
        action.onClick(e, rowData);
        handleClose();
      }}
    >
      <ListItemIcon>{action.icon}</ListItemIcon>
      <ListItemText primary={action.name} />
    </MenuItem>
  );
};
