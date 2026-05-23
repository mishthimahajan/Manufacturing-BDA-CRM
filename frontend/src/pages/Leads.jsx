import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../api";

export default function Leads() {

const [leads,setLeads] =
useState([]);

const [loading,setLoading] =
useState(true);

const [search,setSearch] =
useState("");

const [showModal,setShowModal] =
useState(false);

const [form,setForm] =
useState({

company:"",
contactPerson:"",
status:"Pending",
priority:"Low",
revenue:0

});

useEffect(()=>{

fetchLeads();

},[]);

const fetchLeads = async()=>{

try{

setLoading(true);

const res =
await API.get(
"/leads"
);

setLeads(
res.data || []
);

}
catch(err){

console.log(err);

}
finally{

setLoading(false);

}

};

const createLead = async()=>{

try{

await API.post(

"/leads",

form

);

setShowModal(false);

setForm({

company:"",
contactPerson:"",
status:"Pending",
priority:"Low",
revenue:0

});

fetchLeads();

}
catch(err){

console.log(err);

alert(
"Failed to create lead"
);

}

};

const filteredLeads =
leads.filter(

lead=>

lead.company
?.toLowerCase()

.includes(

search
.toLowerCase()

)

);

return(

<Layout>

<div className="bg-white rounded-3xl shadow-lg p-8">

<div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

<h1 className="text-3xl font-bold text-purple-700">

Lead Management

</h1>

<div className="flex gap-3">

<input

type="text"

placeholder="Search company..."

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

className="border border-purple-200 p-3 rounded-xl outline-none"

 />

<button

onClick={()=>

setShowModal(true)

}

className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-6 rounded-xl hover:scale-105 duration-300"

>

+ Add Lead

</button>

</div>

</div>

{

loading ?

<div className="text-center text-xl">

Loading...

</div>

:

<table className="w-full">

<thead>

<tr className="bg-linear-to-r from-purple-600 to-pink-500 text-white">

<th className="p-4">

Company

</th>

<th>

Contact Person

</th>

<th>

Status

</th>

<th>

Priority

</th>

<th>

Revenue

</th>

</tr>

</thead>

<tbody>

{

filteredLeads.length===0 ?

<tr>

<td

colSpan="5"

className="text-center p-8"

>

No Leads Found

</td>

</tr>

:

filteredLeads.map((lead)=>(

<tr

key={lead._id}

className="border-b hover:bg-purple-50"

>

<td className="p-4 font-medium">

{lead.company}

</td>

<td>

{lead.contactPerson}

</td>

<td>

<span className={`px-3 py-1 rounded-full text-sm

${lead.status==="Won"

? "bg-green-100 text-green-700"

: lead.status==="Lost"

? "bg-red-100 text-red-700"

: "bg-yellow-100 text-yellow-700"

}

`}>

{lead.status}

</span>

</td>

<td>

{lead.priority}

</td>

<td>

₹ {lead.revenue}

</td>

</tr>

))

}

</tbody>

</table>

}

</div>

{

showModal &&

<div className="fixed inset-0 bg-black/50 flex justify-center items-center">

<div className="bg-white w-87.5 rounded-3xl p-8">

<h2 className="text-2xl font-bold text-purple-700 mb-5">

Create Lead

</h2>

<div className="space-y-4">

<input

placeholder="Company Name"

className="border w-full p-3 rounded-xl"

value={form.company}

onChange={(e)=>

setForm({

...form,

company:
e.target.value

})

}

/>

<input

placeholder="Contact Person"

className="border w-full p-3 rounded-xl"

value={form.contactPerson}

onChange={(e)=>

setForm({

...form,

contactPerson:
e.target.value

})

}

/>

<select

className="border w-full p-3 rounded-xl"

value={form.status}

onChange={(e)=>

setForm({

...form,

status:
e.target.value

})

}

>

<option>

Pending

</option>

<option>

Won

</option>

<option>

Lost

</option>

</select>

<select

className="border w-full p-3 rounded-xl"

value={form.priority}

onChange={(e)=>

setForm({

...form,

priority:
e.target.value

})

}

>

<option>

Low

</option>

<option>

Medium

</option>

<option>

High

</option>

</select>

<input

type="number"

placeholder="Revenue"

className="border w-full p-3 rounded-xl"

value={form.revenue}

onChange={(e)=>

setForm({

...form,

revenue:
e.target.value

})

}

/>

<div className="flex gap-3">

<button

onClick={createLead}

className="bg-purple-600 text-white p-3 rounded-xl flex-1"

>

Save

</button>

<button

onClick={()=>

setShowModal(false)

}

className="bg-gray-300 p-3 rounded-xl flex-1"

>

Cancel

</button>

</div>

</div>

</div>

</div>

}

</Layout>

);

}