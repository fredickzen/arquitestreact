import React from "react";
import UserButtons from "./partial/UserButtons";
import UserList from "./partial/userlist/UserList";

const Users = () => {
    const conf = 
    {
        titulo: "Otro título"
    }
    
    return (
        <div>
            <UserButtons {...conf}/>
            <UserList {...conf}/>
        </div>
    );
};

export default Users;
