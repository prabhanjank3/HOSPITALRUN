import Dashboard from "../../pages/dashboard/Dashboard";
import SidebarItem from "../../models/sidebarItem";
import NewAppointment from "../../components/appointments/new/NewAppointment";


const getRoutes = () => {
    return routes;
}


const patientRoutes:SidebarItem[] = [{
    label:'Dashboard',
    component:<Dashboard />
},
{
    label:'Appointment',
    child:[{
        label:'Schedule New',
        component:<NewAppointment />
    }]
}];
var sidebarRoutes:SidebarItem[] = [{
    label:'Dashboard',
    component:<Dashboard />
},
{
    label:'OPD',
    child:[]
}];
const routes = {
    PATIENT:patientRoutes,
    DOCTOR: sidebarRoutes
}
export {sidebarRoutes, patientRoutes, getRoutes};