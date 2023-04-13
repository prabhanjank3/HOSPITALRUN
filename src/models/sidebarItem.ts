export default interface SidebarItem{
    label:string,
    component?:JSX.Element,
    child?:SidebarItem[]
}