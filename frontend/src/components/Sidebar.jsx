import {
FaChartPie,
FaUsers,
FaTasks,
FaSignOutAlt
}
from "react-icons/fa";

import {Link}
from "react-router-dom";

export default function Sidebar(){

return(

<div className="w-72 h-screen bg-linear-to-b from-indigo-900 via-purple-800 to-pink-700 text-white fixed">

<div className="p-8 text-3xl font-bold border-b border-purple-400">

BDA CRM

</div>

<div className="mt-8">

<Link
to="/dashboard"
className="flex items-center gap-4 p-5 hover:bg-white/20 duration-300">

<FaChartPie/>

Dashboard

</Link>

<Link
to="/leads"
className="flex items-center gap-4 p-5 hover:bg-white/20 duration-300">

<FaUsers/>

Leads

</Link>

<Link
to="/tasks"
className="flex items-center gap-4 p-5 hover:bg-white/20 duration-300">

<FaTasks/>

Tasks

</Link>

<div className="absolute bottom-5 w-full">

<button

onClick={()=>{

localStorage.clear();

window.location="/";

}}

className="flex gap-3"

>

Logout

</button>

</div>

</div>

</div>

);

}