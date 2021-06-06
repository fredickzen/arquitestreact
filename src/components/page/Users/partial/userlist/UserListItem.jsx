import React from 'react';

const UserListItem = ({user}) => {
    const { id, nombre } = user;
    return (
        <div>
            <h1>{id}</h1>
            <br />
            <h3>{nombre}</h3>
            <hr />
        </div>
    );
}

export default UserListItem;
