import React, { useState } from 'react';
import { Test } from '../../../js/api/test/test';
import ButtonAction from '../../controls/buttons/ButtonAction';

const Users = () => {

    const [loading, setLoading] = useState(false);
    const callApi = async () => {
        setLoading(true)
        const resultado = await Test.llamadoApi();
        console.log(resultado);
        setLoading(false)
    }
    return (
        <div>
            <ButtonAction onClick={callApi} loading={loading}/>
        </div>
    );
}

export default Users;
