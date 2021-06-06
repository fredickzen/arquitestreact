import React from 'react';
import UserListItem from './UserListItem';

const UserList = () => {
    const listadoUsuarios = [{ id: 1, nombre: "Pozo" }, { id: 2, nombre: "Chimi" }, { id: 3, nombre: "Palomo" }]
    return (
        <div>
            <h3>Listado de usuarios</h3>
            {listadoUsuarios.map(x => <UserListItem key={x.id} user={x} />)}
        </div>
    );
}

export default UserList;
