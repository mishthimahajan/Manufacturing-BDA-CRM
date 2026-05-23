import {

useEffect,
useState

}

from "react";

import Layout from "../components/Layout";

import API from "../api";

export default function Tasks(){

const[tasks,setTasks]=
useState([]);

useEffect(()=>{

loadTasks();

},[]);

const loadTasks=
async()=>{

const res=
await API.get(
"/tasks"
);

setTasks(
res.data
);

};

return(

<Layout>

<div className="bg-white p-8 rounded-2xl shadow">

<h1 className="text-3xl font-bold text-purple-700 mb-5">

Task Management

</h1>

<table className="w-full">

<thead>

<tr className="bg-linear-to-r from-blue-600 to-cyan-500 text-white">

<th className="p-4">

Task

</th>

<th>

Progress

</th>

<th>

Deadline

</th>

</tr>

</thead>

<tbody>

{

tasks.map((task)=>(

<tr
key={task._id}

className="border-b">

<td className="p-4">

{task.title}

</td>

<td>

{task.progress}%

</td>

<td>

{

new Date(
task.deadline
)

.toLocaleDateString()

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

</Layout>

);

}