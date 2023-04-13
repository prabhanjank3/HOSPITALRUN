import React from "react";

export default interface ActionItem{
    name:string,
    icon?:React.ReactNode,
    onClick: (event:any, data:Object | Object[]) => void
}