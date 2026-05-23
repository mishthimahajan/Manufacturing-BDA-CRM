// import {

// useEffect,
// useState

// }

// from "react";

// import Layout from "../components/Layout";

// import API from "../api";

// export default function Dashboard(){

// const[stats,setStats]=
// useState({

// total:0,
// won:0,
// lost:0

// });

// useEffect(()=>{

// loadStats();

// },[]);

// const loadStats=
// async()=>{

// const res=
// await API.get(
// "/leads/stats"
// );

// setStats(
// res.data
// );

// };

// return(

// <Layout>

// <div className="grid grid-cols-3 gap-5">

// <div className="bg-linear-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl">

// <h2>Total Leads</h2>

// <h1 className="text-3xl">

// {stats.total}

// </h1>

// </div>

// <div className="bg-linear-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl">

// <h2>Won</h2>

// <h1 className="text-3xl">

// {stats.won}

// </h1>

// </div>

// <div className="bg-linear-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl">

// <h2>Lost</h2>

// <h1 className="text-3xl">

// {stats.lost}

// </h1>

// </div>

// </div>

// </Layout>

// );

// }

import {useEffect,useState} from "react";
import Layout from "../components/Layout";
import API from "../api";


export default function Dashboard(){

const [stats,setStats]=
useState({
total:0,
won:0,
lost:0
});

useEffect(()=>{

loadStats();

},[]);

const loadStats=async()=>{

const res=
await API.get(
"/leads/stats"
);

setStats(
res.data
);

};

return(

<Layout>

<div className="grid grid-cols-3 gap-5">

<div className="bg-linear-to-r from-blue-500 to-cyan-500 p-6 rounded-xl text-white">

<h2>Total Leads</h2>

<h1 className="text-3xl">

{stats.total}

</h1>

</div>

<div className="bg-linear-to-r from-green-500 to-emerald-500 p-6 rounded-xl text-white">

<h2>Won</h2>

<h1 className="text-3xl">

{stats.won}

</h1>

</div>

<div className="bg-linear-to-r from-red-500 to-pink-500 p-6 rounded-xl text-white">

<h2>Lost</h2>

<h1 className="text-3xl">

{stats.lost}

</h1>

</div>

</div>

</Layout>

);

}