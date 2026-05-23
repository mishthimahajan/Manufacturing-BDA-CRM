import API from "../api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

const navigate = useNavigate();

const [form,setForm] = useState({

name:"",
email:"",
password:"",
role:"admin"

});

const [loading,setLoading] =
useState(false);

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const submit = async(e)=>{

e.preventDefault();

try{

setLoading(true);

await axios.post(

"/auth/register",

form

);

alert(
"Registration Successful"
);

navigate("/");

}
catch(err){

alert(

err.response?.data?.msg ||

"Registration Failed"

);

}
finally{

setLoading(false);

}

};

return(

<div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-pink-900 flex">

<div className="hidden lg:flex w-1/2 justify-center items-center">

<div>

<h1 className="text-6xl font-bold text-white">

BDA CRM

</h1>

<p className="text-purple-200 mt-5 text-xl">

Manufacturing Team Management Platform

</p>

</div>

</div>

<div className="flex-1 flex justify-center items-center">

<div className="w-87.5 bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">

<h2 className="text-4xl font-bold text-white">

Create Account

</h2>

<p className="text-purple-200 mb-8">

Register to continue

</p>

<form
onSubmit={submit}

className="space-y-5">

<input

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"

/>

<input

name="email"

type="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"

/>

<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"

/>

<select

name="role"

value={form.role}

onChange={handleChange}

className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"

>

<option value="admin">

Admin

</option>

<option value="manager">

Manager

</option>

<option value="employee">

Employee

</option>

</select>

<button

type="submit"

className="w-full bg-linear-to-r from-pink-500 to-purple-600 p-4 rounded-xl text-white font-bold hover:scale-105 duration-300"

>

{

loading ?

"Creating..." :

"Register"

}

</button>

</form>

<p className="text-center text-purple-200 mt-6">

Already have account?

<Link

to="/"

className="text-pink-300 ml-2"

>

Login

</Link>

</p>

</div>

</div>

</div>

);

}