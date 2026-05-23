import React from "react";

import ReactDOM from "react-dom/client";

import {

BrowserRouter,

Routes,

Route

}

from "react-router-dom";

import {

GoogleOAuthProvider

}

from "@react-oauth/google";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Leads from "./pages/Leads";

import Tasks from "./pages/Tasks";

import ProtectedRoute from "./components/ProtectedRoute";

import "./index.css";

ReactDOM.createRoot(

document.getElementById(
"root"
)

).render(

<GoogleOAuthProvider

clientId="YOUR_GOOGLE_CLIENT_ID"

>

<BrowserRouter>

<Routes>

<Route

path="/"

element={<Login/>}

/>

<Route

path="/register"

element={<Register/>}

/>

<Route

path="/dashboard"

element={

<ProtectedRoute>

<Dashboard/>

</ProtectedRoute>

}

/>

<Route

path="/leads"

element={

<ProtectedRoute>

<Leads/>

</ProtectedRoute>

}

/>

<Route

path="/tasks"

element={

<ProtectedRoute>

<Tasks/>

</ProtectedRoute>

}

/>

</Routes>

</BrowserRouter>

</GoogleOAuthProvider>

);