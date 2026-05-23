import Sidebar from "./Sidebar";

import Navbar from "./Navbar";

export default function Layout({children}){

return(

<div className="flex">

<Sidebar/>

<div className="ml-72 w-full bg-slate-100 min-h-screen p-8">

<Navbar/>

<div className="mt-8">

{children}

</div>

</div>

</div>

);

}