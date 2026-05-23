import {
Navigate
}
from "react-router-dom";

export default function ProtectedRoute({

children

}){

const token=
localStorage.getItem(
"token"
);

const google=
localStorage.getItem(
"user"
);

if(
!token &&
!google
){

return <Navigate to="/"/>

}

return children;

}